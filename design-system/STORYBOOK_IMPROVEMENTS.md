# Storybook UI Improvements

*Updated with current story paths from sitemap (8/7/2025)*

## ✅ **Completed:**
- **Storybook theme**: Light theme working correctly (respects system preferences)
- **Controls positioning**: Controls panel positioned on right side

## 🎯 **Current Issues to Review:**

### **1. Components/Button Stories**
- **URL**: `http://localhost:6006/?path=/story/components-button--default`
- **Available stories**: Default, Secondary, Danger, Success, Transparent, IconOnly
- **Check**: Icon visibility and styling in IconOnly story

### **2. Patterns/Buttons**
- **URL**: `http://localhost:6006/?path=/story/patterns--buttons`
- **Check**: Button collections and visibility of all button types

### **3. Patterns/Icons**
- **URL**: `http://localhost:6006/?path=/story/patterns-icons--iconsgrid`
- **Check**: Icon grid layout, size controls, and visibility

### **4. Missing Token Stories**
- **Issue**: No "Tokens" section visible in current sitemap
- **Expected**: Colors, Typography, Spacing token documentation
- **Action needed**: Verify if token stories exist or need to be created

## 📋 **Story Structure from Sitemap:**
```
- Patterns/Icons (IconsGrid)
- Patterns/Footer with Settings (DefaultFooter, FloatingFooter)  
- Components/Button (Default, Secondary, Danger, Success, Transparent, IconOnly)
- Components/Footer (Default, CustomLabel, NoSettings, FloatingVariant, WithIntegratedOverlay)
- Components/Settings Overlay (Default, AlwaysOpen)
- Patterns (Buttons, Footer, Settings)
```

## 🔍 **Next Steps:**
1. Review actual stories in browser using current URLs
2. Identify specific visibility/styling issues
3. Check if token stories need to be added back
4. Update this file with specific actionable items