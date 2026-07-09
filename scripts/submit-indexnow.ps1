<#
.SYNOPSIS
    Submit all URLs from sitemap to Bing IndexNow API

.DESCRIPTION
    This script reads the sitemap-full-updated.xml file and submits all URLs
    to Bing's IndexNow endpoint in batches for faster indexing.

.NOTES
    Domain: www.sproutern.com
    Key: YOUR_INDEXNOW_KEY
    Created: 2025-12-29
#>

param(
    [int]$BatchSize = 100,
    [int]$DelaySeconds = 2
)

# Configuration
$HostName = "www.sproutern.com"
$IndexNowKey = "YOUR_INDEXNOW_KEY"
$BingEndpoint = "https://www.bing.com/indexnow"
$SitemapPath = Join-Path $PSScriptRoot ".." "sitemap-full-updated.xml"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  IndexNow Submission for Sproutern.com" -ForegroundColor Cyan  
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if sitemap exists
if (-not (Test-Path $SitemapPath)) {
    Write-Host "ERROR: Sitemap not found at $SitemapPath" -ForegroundColor Red
    exit 1
}

# Load and parse sitemap
Write-Host "Loading sitemap..." -ForegroundColor Yellow
[xml]$Sitemap = Get-Content $SitemapPath -Encoding UTF8

# Extract all URLs
$Urls = @($Sitemap.urlset.url | ForEach-Object { $_.loc })
$TotalUrls = $Urls.Count

Write-Host "Found $TotalUrls URLs in sitemap" -ForegroundColor Green
Write-Host ""

# Calculate batches
$TotalBatches = [Math]::Ceiling($TotalUrls / $BatchSize)
Write-Host "Submitting in $TotalBatches batches (max $BatchSize URLs each)" -ForegroundColor Yellow
Write-Host ""

# Tracking
$SuccessfulBatches = 0
$FailedBatches = 0
$SubmittedUrls = 0

# Submit in batches
for ($i = 0; $i -lt $TotalBatches; $i++) {
    $StartIndex = $i * $BatchSize
    $EndIndex = [Math]::Min($StartIndex + $BatchSize - 1, $TotalUrls - 1)
    $BatchUrls = @($Urls[$StartIndex..$EndIndex])
    $BatchCount = $BatchUrls.Count
    
    Write-Host "Batch $($i + 1)/$TotalBatches ($BatchCount URLs)... " -NoNewline -ForegroundColor Cyan
    
    $Body = @{
        host = $HostName
        key = $IndexNowKey
        urlList = $BatchUrls
    } | ConvertTo-Json -Depth 3 -Compress
    
    try {
        $Response = Invoke-RestMethod -Uri $BingEndpoint -Method Post -ContentType "application/json; charset=utf-8" -Body $Body
        Write-Host "OK" -ForegroundColor Green
        $SuccessfulBatches++
        $SubmittedUrls += $BatchCount
    }
    catch {
        $StatusCode = $_.Exception.Response.StatusCode.value__
        if ($StatusCode -eq 200 -or $StatusCode -eq 202) {
            Write-Host "OK (HTTP $StatusCode)" -ForegroundColor Green
            $SuccessfulBatches++
            $SubmittedUrls += $BatchCount
        }
        else {
            Write-Host "FAILED (HTTP $StatusCode)" -ForegroundColor Red
            $FailedBatches++
        }
    }
    
    # Delay between batches
    if ($i -lt $TotalBatches - 1) {
        Start-Sleep -Seconds $DelaySeconds
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Submission Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "  Total URLs in sitemap: $TotalUrls"
Write-Host "  URLs submitted: $SubmittedUrls" -ForegroundColor Green
Write-Host "  Successful batches: $SuccessfulBatches / $TotalBatches"
if ($FailedBatches -gt 0) {
    Write-Host "  Failed batches: $FailedBatches" -ForegroundColor Red
}
Write-Host ""
Write-Host "Key verification URL:" -ForegroundColor Yellow
Write-Host "  https://$HostName/$IndexNowKey.txt" -ForegroundColor White
Write-Host ""
