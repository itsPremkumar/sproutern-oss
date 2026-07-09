'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  QrCode,
  Download,
  Link as LinkIcon,
  Mail,
  Phone,
  Wifi,
  FileText,
  RotateCcw,
} from 'lucide-react';

type QRType = 'url' | 'text' | 'email' | 'phone' | 'wifi';

export default function QRCodeGeneratorClient() {
  const [qrType, setQrType] = useState<QRType>('url');
  const [inputValue, setInputValue] = useState('');
  const [wifiData, setWifiData] = useState({
    ssid: '',
    password: '',
    security: 'WPA',
  });
  const [qrUrl, setQrUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQR = () => {
    let data = '';
    switch (qrType) {
      case 'url':
        data = inputValue.startsWith('http')
          ? inputValue
          : `https://${inputValue}`;
        break;
      case 'text':
        data = inputValue;
        break;
      case 'email':
        data = `mailto:${inputValue}`;
        break;
      case 'phone':
        data = `tel:${inputValue}`;
        break;
      case 'wifi':
        data = `WIFI:T:${wifiData.security};S:${wifiData.ssid};P:${wifiData.password};;`;
        break;
    }

    if (!data || (qrType === 'wifi' && !wifiData.ssid)) {
      return;
    }

    setIsGenerating(true);
    // Using QR Server API for QR generation (free, no signup)
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(data)}`;
    setQrUrl(qrApiUrl);
    setTimeout(() => setIsGenerating(false), 500);
  };

  const downloadQR = () => {
    if (!qrUrl) return;
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `qrcode-${qrType}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    setInputValue('');
    setWifiData({ ssid: '', password: '', security: 'WPA' });
    setQrUrl('');
  };

  const typeButtons: { type: QRType; icon: React.ReactNode; label: string }[] =
    [
      { type: 'url', icon: <LinkIcon className="h-4 w-4" />, label: 'URL' },
      { type: 'text', icon: <FileText className="h-4 w-4" />, label: 'Text' },
      { type: 'email', icon: <Mail className="h-4 w-4" />, label: 'Email' },
      { type: 'phone', icon: <Phone className="h-4 w-4" />, label: 'Phone' },
      { type: 'wifi', icon: <Wifi className="h-4 w-4" />, label: 'WiFi' },
    ];

  const getPlaceholder = () => {
    switch (qrType) {
      case 'url':
        return 'https://example.com or example.com';
      case 'email':
        return 'name@example.com';
      case 'phone':
        return '+91 9876543210';
      default:
        return 'Enter your text message...';
    }
  };

  const getInputLabel = () => {
    switch (qrType) {
      case 'url':
        return 'Website URL';
      case 'email':
        return 'Email Address';
      case 'phone':
        return 'Phone Number';
      default:
        return 'Text Content';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-6 pt-6">
          {/* QR Type Selection */}
          <div>
            <Label className="mb-3 block">Select QR Code Type</Label>
            <div className="flex flex-wrap gap-2">
              {typeButtons.map((btn) => (
                <Button
                  key={btn.type}
                  variant={qrType === btn.type ? 'default' : 'outline'}
                  onClick={() => {
                    setQrType(btn.type);
                    setQrUrl('');
                    setInputValue('');
                  }}
                  className="flex items-center gap-2"
                >
                  {btn.icon}
                  <span>{btn.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          {qrType !== 'wifi' ? (
            <div>
              <Label htmlFor="qr-input">{getInputLabel()}</Label>
              <Input
                id="qr-input"
                placeholder={getPlaceholder()}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="mt-1"
              />
              {qrType === 'url' && (
                <p className="mt-1 text-xs text-muted-foreground">
                  We&apos;ll add https:// automatically if not provided
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="wifi-ssid">Network Name (SSID)</Label>
                <Input
                  id="wifi-ssid"
                  placeholder="MyWiFi"
                  value={wifiData.ssid}
                  onChange={(e) =>
                    setWifiData({ ...wifiData, ssid: e.target.value })
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="wifi-password">Password</Label>
                <Input
                  id="wifi-password"
                  type="password"
                  placeholder="WiFi Password"
                  value={wifiData.password}
                  onChange={(e) =>
                    setWifiData({ ...wifiData, password: e.target.value })
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="wifi-security">Security Type</Label>
                <select
                  id="wifi-security"
                  value={wifiData.security}
                  onChange={(e) =>
                    setWifiData({ ...wifiData, security: e.target.value })
                  }
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2"
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">No Password</option>
                </select>
              </div>
            </div>
          )}

          {/* Generate Button */}
          <div className="flex gap-3">
            <Button
              onClick={generateQR}
              className="flex-1"
              size="lg"
              disabled={isGenerating}
            >
              <QrCode className="mr-2 h-5 w-5" />
              {isGenerating ? 'Generating...' : 'Generate QR Code'}
            </Button>
            <Button
              variant="outline"
              onClick={handleClear}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* QR Code Output */}
      {qrUrl && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="space-y-4 pt-6">
            <div className="text-center">
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                Your QR Code is ready!
              </p>
              <div className="inline-block rounded-lg bg-white p-4 shadow-sm">
                <img
                  src={qrUrl}
                  alt="Generated QR Code"
                  className="mx-auto"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <Button
                onClick={downloadQR}
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PNG
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Right-click image to copy or save. QR code is 300x300 pixels.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
