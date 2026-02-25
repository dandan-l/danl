# Image Asset Migration Guide

## Overview

This guide explains how to migrate from Figma Make's virtual `figma:asset/` imports to standard file-based imports.

## What Changed

### Before (Figma Make)
```typescript
import imgExample from "figma:asset/abc123.png";
```

### After (Standard Import)
```typescript
import imgExample from "../../assets/images/abc123.png";
```

## Migration Status

✅ **All import statements have been updated** - All 47 instances across 17 files have been converted to use `/src/assets/images/` paths.

## What You Need to Do

Since `figma:asset/` is a **virtual module scheme** in Figma Make (not physical files), you need to:

### Option 1: Export from Figma (Recommended)
1. Open your Figma design file
2. Select the images/assets you need
3. Export each image
4. Rename the exported files to match the hash filenames listed below
5. Place them in `/src/assets/images/`

### Option 2: Use Placeholders
1. Create placeholder images with the required dimensions
2. Name them according to the hash filenames below
3. Place them in `/src/assets/images/`
4. Replace with actual images later

### Option 3: Use ImageWithFallback Component
The codebase includes `/src/app/components/figma/ImageWithFallback.tsx` which can handle missing images gracefully.

## Required Image Files

All images must be placed in `/src/assets/images/` with these exact filenames:

### eFileMyForms Project Images (27 files)
- `44c89db9907048b327e18a457040d46b54e9a8c1.png`
- `bf6fc522f36e41df1b50faed88c2c7daa02e1cd9.png`
- `8ab723e166ecab2d15c2fc7a7e82f3c0d27e5c13.png`
- `c0aaa1b8b7e067029b3f4b2f46d2abce1ee53ef9.png`
- `f518db6d25e7df170a6773d6216604eae2ecc187.png`
- `73e3173236b468c3eb096e203cb15331108fdc4a.png`
- `071d0e577fa418acd358b5de54fc434aa3501245.png`
- `d1c1e464e996db6574f5f201f46c63e85998cacb.png`
- `0afa29c5858e4ee9a35c7e332966e4a0cb823bde.png`
- `39cf82331f03a8c4b023a18a3ba6e82db0d39f84.png`
- `cd000edf43fca049ee75f7d3bff82b50807d84e7.png`
- `465d87af4f04461a2cdd541d272699324525cf94.png`
- `3ccc1d20db2bf79e483adebb6c58345d8af4417d.png`
- `4253a702aad526344357674f4a4e6c0f5ad77314.png`
- `dbb53c65ae9aa6c228a97ebf1b2e47027059e869.png`
- `6d6f134ee145ce3c3cf1e1b5250a1573dd009516.png`
- `c58f76879dec439d092fb0bbab3c542d03ccaca8.png`
- `c059298f299b79c70e002cc398771b22a429b587.png`
- `b197013400b37ac04a959f947440f73c4645c796.png`
- `158c2de71a55d5ebeaddb2e21aef62c7ea7afe72.png`
- `e00eab477c2334ef7f02dd57c8b00bfdbd705145.png`
- `ea61a84de65b96d850e0d9d3b871d7ca50702db3.png`
- `45bdb24783dee504dd3ccf950829a78788240368.png`
- `ab1338593d4f1e51b5baa22b219b7509d196f65f.png`
- `5af4195e554f502f2976c8ffb5c1cb48d3f6b995.png`
- `9e3808e6e484ca884965e623b391afa1820e50a0.png`
- `4233a7cd2e8411a860c13e89a12c181d2d6a3ee8.png`

### ReportMyUP Project Images (11 files)
- `1886cb5e05d9a9a99d44093cefcd147f56fbdf10.png`
- `b0a3e4936066a33db69c8b2a81cd467ceaf0e75d.png`
- `f6ab0b13167f6a67794c1c6a4948c4598c6e6753.png`
- `a610d6966094e3b7470754e72058b839867b6e2a.png`
- `24da5d712e7c0f797493bda27194914eb03fad09.png`
- `662a461023369b417fd54501cceeb872d6118cc1.png`
- `6e3b031f5d2db16ce0bc311e723a4c621b432828.png`
- `2e2d27c651a38cc7bd69e71d80366f1774d5d6b1.png`
- `95a8c883e45a4e5d53e5a12693b5ce05c3ea2440.png`
- `704eaaff6951b9d04d9d4f3cb1ed6dee6b98a20c.png`
- `e4b3c9a41871f89d5663f1c1be25ba0ec13c553a.png`

### Other Pages (3 files)
- `81a0710bc65173f4531e35a1764ec4fe4e88d111.png` (HomePage)
- `c6d278d9a48683120233d2201418d63e6c410d6b.png` (HomePage)
- `e8341189375e5810aa27634f35766489f08c8b52.png` (AboutPage)

## Files That Were Updated

### Components
1. `/src/app/components/RemoveFrictionSection.tsx`
2. `/src/app/components/efilemyforms/EFileMyFormsAnalysisSection.tsx`
3. `/src/app/components/efilemyforms/EFileMyFormsBrandingSection.tsx`
4. `/src/app/components/efilemyforms/EFileMyFormsCheckoutSection.tsx`
5. `/src/app/components/efilemyforms/EFileMyFormsHeroSection.tsx`
6. `/src/app/components/efilemyforms/EFileMyFormsInformationArchitectureSection.tsx`
7. `/src/app/components/efilemyforms/EFileMyFormsPersonaSection.tsx`
8. `/src/app/components/efilemyforms/EFileMyFormsPrototypeSection.tsx`
9. `/src/app/components/efilemyforms/EFileMyFormsResultSection.tsx`
10. `/src/app/components/efilemyforms/EFileMyFormsSignupSection.tsx`
11. `/src/app/components/reportmyup/ReportMyUPChallengesSection.tsx`
12. `/src/app/components/reportmyup/ReportMyUPDesignHighlightsSection.tsx`
13. `/src/app/components/reportmyup/ReportMyUPHeroSection.tsx`
14. `/src/app/components/reportmyup/ReportMyUPLongTermStrategySection.tsx`
15. `/src/app/components/reportmyup/ReportMyUPMigrationSection.tsx`

### Pages
16. `/src/app/pages/AboutPage.tsx`
17. `/src/app/pages/HomePage.tsx`

## Verification

After placing images in `/src/assets/images/`, verify the migration:

```bash
# Check if all required images are present
ls -la src/assets/images/*.png | wc -l
# Should return: 41 (total unique images)

# Check if there are any remaining figma:asset imports
grep -r "figma:asset" src/
# Should return: no results
```

## Troubleshooting

### Images not loading?
1. Verify the image files are in `/src/assets/images/`
2. Check that filenames exactly match (including .png extension)
3. Ensure file permissions allow reading
4. Clear your build cache and restart the dev server

### Build errors?
1. Make sure all image files exist before building
2. Check that import paths are correct
3. Verify there are no typos in filenames

## Notes

- All hash filenames are preserved from the original Figma Make system
- Some images may be duplicated across different components (reused assets)
- The folder structure is flat - all images are in `/src/assets/images/`
- Consider organizing into subfolders if needed (will require updating import paths)
