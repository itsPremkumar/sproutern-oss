import { analytics } from './firebase';
import {
  logEvent as firebaseLogEvent,
  Analytics,
  setUserProperties as firebaseSetUserProperties,
} from 'firebase/analytics';

// Type definitions for stricter metrics
type EventParams = {
  [key: string]: string | number | boolean | object | undefined;
};

// Environment check to prevent console noise in production
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// ============================================
// CORE LOGGING FUNCTION
// ============================================

export const logEvent = (eventName: string, eventParams?: EventParams) => {
  if (typeof window !== 'undefined') {
    // Push to GTM dataLayer
    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    } catch (error) {
      // Ignore dataLayer errors
    }

    // Push to Firebase
    if (analytics) {
      try {
        firebaseLogEvent(analytics as Analytics, eventName, eventParams);
        if (!IS_PRODUCTION) {
          console.log(`[Analytics] Event: ${eventName}`, eventParams);
        }
      } catch (error) {
        if (!IS_PRODUCTION) {
          console.error('[Analytics] Error logging event:', error);
        }
      }
    }
  }
};

// ============================================
// PAGE VIEW TRACKING
// ============================================

export const logPageView = (url: string) => {
  logEvent('page_view', {
    page_path: url,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_title: typeof document !== 'undefined' ? document.title : '',
  });
};

// ============================================
// AUTHENTICATION EVENTS
// ============================================

export const logLogin = (method: string) => {
  logEvent('login', {
    method,
  });
};

export const logSignUp = (method: string) => {
  logEvent('sign_up', {
    method,
  });
};

export const logStartSignUp = () => {
  logEvent('begin_sign_up');
};

export const logLogout = () => {
  logEvent('logout');
};

// ============================================
// USER ENGAGEMENT EVENTS
// ============================================

export const logScrollDepth = (depth: number, pagePath: string) => {
  logEvent('scroll_depth', {
    percent_scrolled: depth,
    page_path: pagePath,
  });
};

export const logTimeOnPage = (pagePath: string, durationSeconds: number) => {
  logEvent('time_on_page', {
    page_path: pagePath,
    engagement_time_sec: durationSeconds,
  });
};

export const logOutboundClick = (url: string, linkText: string) => {
  logEvent('outbound_click', {
    link_url: url,
    link_text: linkText,
  });
};

export const logSocialShare = (
  platform: string,
  contentType: string,
  contentId?: string,
) => {
  logEvent('share', {
    method: platform,
    content_type: contentType,
    item_id: contentId,
  });
};

export const logSessionStart = () => {
  logEvent('session_start');
};

// ============================================
// SEARCH & DISCOVERY EVENTS
// ============================================

export const logSearch = (
  searchTerm: string,
  resultCount: number,
  searchType: string = 'general',
) => {
  logEvent('search', {
    search_term: searchTerm,
    results_count: resultCount,
    search_type: searchType,
  });
};

export const logFilter = (
  filterType: string,
  filterValue: string,
  context: string = 'internships',
) => {
  logEvent('filter_applied', {
    filter_type: filterType,
    filter_value: filterValue,
    context: context,
  });
};

// ============================================
// INTERNSHIP EVENTS
// ============================================

export const logViewItem = (
  itemId: string,
  itemName: string,
  itemCategory: string = 'general',
  value: number = 0,
  currency: string = 'INR',
) => {
  logEvent('view_item', {
    currency,
    value,
    items: [
      {
        item_id: itemId,
        item_name: itemName,
        item_category: itemCategory,
      },
    ],
  });
};

export const logInternshipView = (
  internshipId: string,
  title: string,
  company: string,
  workMode?: string,
) => {
  logEvent('view_internship', {
    internship_id: internshipId,
    internship_title: title,
    company_name: company,
    work_mode: workMode || 'unknown',
  });
};

export const logApplyInternship = (
  internshipId: string,
  internshipTitle: string,
) => {
  logEvent('apply_internship', {
    internship_id: internshipId,
    internship_title: internshipTitle,
  });
};

export const logBeginApplication = (
  internshipId: string,
  internshipTitle: string,
) => {
  logEvent('begin_application', {
    internship_id: internshipId,
    internship_title: internshipTitle,
  });
};

export const logApplicationSuccess = (
  internshipId: string,
  internshipTitle: string,
) => {
  logEvent('application_success', {
    internship_id: internshipId,
    internship_title: internshipTitle,
  });
};

export const logApplicationError = (internshipId: string, error: string) => {
  logEvent('application_error', {
    internship_id: internshipId,
    error_message: error,
  });
};

// ============================================
// COMPANY EVENTS
// ============================================

export const logCompanyView = (companyId: string, companyName: string) => {
  logEvent('view_company', {
    company_id: companyId,
    company_name: companyName,
  });
};

// ============================================
// TOOL USAGE EVENTS
// ============================================

export const logToolStart = (
  toolName: string,
  toolCategory: string = 'general',
) => {
  logEvent('tool_start', {
    tool_name: toolName,
    tool_category: toolCategory,
  });
};

export const logToolComplete = (toolName: string, result?: object) => {
  logEvent('tool_complete', {
    tool_name: toolName,
    result_data: result ? JSON.stringify(result).substring(0, 100) : undefined,
  });
};

export const logToolError = (toolName: string, error: string) => {
  logEvent('tool_error', {
    tool_name: toolName,
    error_message: error,
  });
};

export const logToolInteraction = (
  toolName: string,
  action: string,
  details?: object,
) => {
  logEvent('tool_interaction', {
    tool_name: toolName,
    action: action,
    details: details ? JSON.stringify(details).substring(0, 100) : undefined,
  });
};

// ============================================
// CONTENT ENGAGEMENT EVENTS
// ============================================

export const logBlogView = (
  articleId: string,
  title: string,
  category: string,
) => {
  logEvent('blog_view', {
    article_id: articleId,
    article_title: title,
    article_category: category,
  });
};

export const logBlogScroll = (articleId: string, scrollPercent: number) => {
  logEvent('blog_scroll', {
    article_id: articleId,
    scroll_percent: scrollPercent,
  });
};

export const logResourceView = (resourceName: string, resourceType: string) => {
  logEvent('resource_view', {
    resource_name: resourceName,
    resource_type: resourceType,
  });
};

export const logResourceDownload = (
  resourceName: string,
  resourceType: string,
) => {
  logEvent('resource_download', {
    resource_name: resourceName,
    resource_type: resourceType,
  });
};

// ============================================
// NAVIGATION EVENTS
// ============================================

export const logNavClick = (navItem: string, section: string = 'main') => {
  logEvent('nav_click', {
    nav_item: navItem,
    nav_section: section,
  });
};

export const logCTAClick = (ctaName: string, location: string) => {
  logEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
};

export const logFooterClick = (linkName: string) => {
  logEvent('footer_click', {
    link_name: linkName,
  });
};

export const logBannerClick = (bannerName: string, bannerPosition: string) => {
  logEvent('banner_click', {
    banner_name: bannerName,
    banner_position: bannerPosition,
  });
};

// ============================================
// PROFILE EVENTS
// ============================================

export const logProfileView = (profileUserId: string, profileType: string) => {
  logEvent('profile_view', {
    profile_user_id: profileUserId,
    profile_type: profileType,
  });
};

export const logProfileUpdate = (
  updateType: string,
  completionPercent: number,
) => {
  logEvent('profile_update', {
    update_type: updateType,
    completion_percent: completionPercent,
  });
};

export const logCompleteProfile = (completionPercent: number) => {
  logEvent('complete_profile', {
    completion_percent: completionPercent,
  });
};

export const logResumeUpload = (success: boolean) => {
  logEvent('resume_upload', {
    success: success,
  });
};

// ============================================
// ERROR TRACKING
// ============================================

export const logError = (
  errorType: string,
  errorMessage: string,
  context?: string,
) => {
  logEvent('app_error', {
    error_type: errorType,
    error_message: errorMessage.substring(0, 100),
    error_context: context,
  });
};

export const logFormError = (
  formName: string,
  fieldName: string,
  error: string,
) => {
  logEvent('form_error', {
    form_name: formName,
    field_name: fieldName,
    error_message: error.substring(0, 100),
  });
};

export const logAPIError = (
  endpoint: string,
  statusCode: number,
  errorMessage: string,
) => {
  logEvent('api_error', {
    endpoint: endpoint,
    status_code: statusCode,
    error_message: errorMessage.substring(0, 100),
  });
};

// ============================================
// CONVERSION FUNNEL EVENTS
// ============================================

export const logViewSignUpPage = () => {
  logEvent('view_signup_page');
};

export const logViewLoginPage = () => {
  logEvent('view_login_page');
};

export const logViewPricing = () => {
  logEvent('view_pricing');
};

export const logSelectPlan = (planName: string, planPrice: number) => {
  logEvent('select_plan', {
    plan_name: planName,
    plan_price: planPrice,
  });
};

// ============================================
// ENGAGEMENT SCORING
// ============================================

export const logEngagementMilestone = (milestone: string, value: number) => {
  logEvent('engagement_milestone', {
    milestone_name: milestone,
    milestone_value: value,
  });
};

// ============================================
// USER PROPERTIES
// ============================================

export const setUserProperties = (properties: {
  userType?: string;
  engagementLevel?: string;
  signupDate?: string;
  profileComplete?: boolean;
}) => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      firebaseSetUserProperties(analytics as Analytics, {
        user_type: properties.userType,
        engagement_level: properties.engagementLevel,
        signup_date: properties.signupDate,
        profile_complete: properties.profileComplete ? 'true' : 'false',
      });
      if (!IS_PRODUCTION) {
        console.log('[Analytics] User properties set:', properties);
      }
    } catch (error) {
      if (!IS_PRODUCTION) {
        console.error('[Analytics] Error setting user properties:', error);
      }
    }
  }
};

export const setUserType = (userType: 'student' | 'startup' | 'admin') => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      firebaseSetUserProperties(analytics as Analytics, {
        user_type: userType,
      });
      if (!IS_PRODUCTION) {
        console.log('[Analytics] User type set:', userType);
      }
    } catch (error) {
      if (!IS_PRODUCTION) {
        console.error('[Analytics] Error setting user type:', error);
      }
    }
  }
};

export const setUserEngagementLevel = (level: 'low' | 'medium' | 'high') => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      firebaseSetUserProperties(analytics as Analytics, {
        engagement_level: level,
      });
      if (!IS_PRODUCTION) {
        console.log('[Analytics] Engagement level set:', level);
      }
    } catch (error) {
      if (!IS_PRODUCTION) {
        console.error('[Analytics] Error setting engagement level:', error);
      }
    }
  }
};

// ============================================
// INTERVIEW EXPERIENCE EVENTS
// ============================================

export const logInterviewExperienceView = (
  companyName: string,
  role: string,
) => {
  logEvent('interview_experience_view', {
    company_name: companyName,
    role: role,
  });
};

// ============================================
// DONATION EVENTS
// ============================================

export const logDonationClick = (amount?: number) => {
  logEvent('donation_click', {
    amount: amount,
  });
};

export const logDonationComplete = (amount: number, method: string) => {
  logEvent('donation_complete', {
    amount: amount,
    payment_method: method,
  });
};

// ============================================
// CHATBOT EVENTS
// ============================================

export const logChatbotOpen = () => {
  logEvent('chatbot_open');
};

export const logChatbotMessage = (messageType: 'user' | 'bot') => {
  logEvent('chatbot_message', {
    message_type: messageType,
  });
};

export const logChatbotClose = (messageCount: number) => {
  logEvent('chatbot_close', {
    message_count: messageCount,
  });
};
