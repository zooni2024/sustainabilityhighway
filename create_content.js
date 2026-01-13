const fs = require('fs');
const path = require('path');

const guides = [
    {
        filename: 'mostadam-overview.mdx',
        content: `---
title: "Understanding the Mostadam Rating System"
description: "A comprehensive overview of Saudi Arabia's local sustainability framework."
publishedAt: "2024-01-15"
updatedAt: "2025-01-10"
tags: ["Mostadam", "Compliance", "KSA"]
framework: "Mostadam"
topic: "General"
stage: "Design"
difficulty: "Beginner"
readingTime: "6 min read"
---

# Understanding Mostadam

Mostadam is the Saudi Green Building Rating System, tailored specifically to the climate and environmental characteristics of Saudi Arabia. It aligns with Vision 2030 to create a sustainable future.

## Key Categories
1. **Site Sustainability**: Connectivity and ecology.
2. **Transportation**: Reducing carbon footprint from travel.
3. **Regionally Priority**: Water conservation and waste management.

> **Note**: Mostadam is mandatory for certain government projects.

## Comparison with LEED
While LEED is global, Mostadam addresses regional water scarcity and cultural aspects more directly.
`
    },
    {
        filename: 'leed-v4-guide-ksa.mdx',
        content: `---
title: "Implementing LEED v4 in Saudi Projects"
description: "Strategies for achieving LEED certification in the KSA climate."
publishedAt: "2023-11-20"
updatedAt: "2024-12-05"
tags: ["LEED", "Certification", "Energy"]
framework: "LEED"
topic: "Energy"
stage: "Construction"
difficulty: "Advanced"
readingTime: "10 min read"
---

# LEED v4.1 in KSA

Achieving LEED Gold or Platinum in Saudi Arabia requires a heavy focus on:

- **Cooling Load Reduction**: High performance envelope.
- **Water Efficiency**: Process water recovery.

## Energy Modeling
Use ASHRAE 90.1-2010 baseline generally, but check local code overrides.

> **Tip**: Focus on regional priority credits for easy points.
`
    },
    {
        filename: 'water-conservation-strategies.mdx',
        content: `---
title: "Water Conservation Strategies for Desert Climates"
description: "Best practices for reducing water usage in KSA buildings."
publishedAt: "2024-02-10"
updatedAt: "2024-02-10"
tags: ["Water", "Irrigation", "Technology"]
framework: "Mostadam"
topic: "Water"
stage: "Design"
difficulty: "Intermediate"
readingTime: "4 min read"
---

# Water Scarcity Solutions

Water is the most critical resource in KSA.

### Indoor Strategies
- Low-flow fixtures (check SASO standards).
- Greywater recycling for flushing.

### Outdoor Strategies
- Xeriscaping (native plants).
- Drip irrigation with smart sensors.
`
    },
    {
        filename: 'indoor-air-quality-standards.mdx',
        content: `---
title: "Indoor Air Quality (IAQ) Standards"
description: "Ensuring healthy indoor environments in compliance with global standards."
publishedAt: "2024-03-01"
updatedAt: "2025-01-01"
tags: ["IAQ", "Health", "Ventilation"]
framework: "WELL"
topic: "IAQ"
stage: "Operation"
difficulty: "Intermediate"
readingTime: "7 min read"
---

# Why IAQ Matters

Poor air quality leads to Sick Building Syndrome (SBS).

## Key Pollutants
- **VOCs**: From paints and adhesives.
- **PM2.5/PM10**: Dust from sandstorms.

## Mitigation
High-efficiency filtration (MERV 13+) is essential in KSA to handle dust loads.
`
    },
    {
        filename: 'construction-waste-management.mdx',
        content: `---
title: "Construction Waste Management Plan (CWMP)"
description: "How to divert waste from landfills effectively."
publishedAt: "2023-09-15"
updatedAt: "2024-08-20"
tags: ["Waste", "Construction", "Recycling"]
framework: "Mostadam"
topic: "Materials"
stage: "Construction"
difficulty: "Beginner"
readingTime: "5 min read"
---

# Developing a CWMP

A solid plan separates waste at the source.

1. **Concrete**: Crush and reuse as aggregate.
2. **Metal**: 100% recyclable.
3. **Wood**: Inspect for damage.

> **Warning**: Mixing hazardous waste with general waste can lead to heavy fines.
`
    },
    {
        filename: 'sustainable-procurement-ksa.mdx',
        content: `---
title: "Sourcing Sustainable Materials in KSA"
description: "Finding local suppliers for green building materials."
publishedAt: "2024-05-12"
updatedAt: "2024-05-12"
tags: ["Materials", "Procurement", "Local"]
framework: "Mostadam"
topic: "Materials"
stage: "Construction"
difficulty: "Intermediate"
readingTime: "6 min read"
---

# Local Content

Prioritize materials manufactured in KSA to reduce carbon footprint from transportation and support the local economy.

## Certification
Look for EPDs (Environmental Product Declarations).
`
    },
    {
        filename: 'energy-modeling-basics.mdx',
        content: `---
title: "Introduction to Energy Modeling"
description: "Basics of building performance simulation."
publishedAt: "2024-01-20"
updatedAt: "2024-11-15"
tags: ["Energy", "Simulation", "Technology"]
framework: "LEED"
topic: "Energy"
stage: "Design"
difficulty: "Advanced"
readingTime: "8 min read"
---

# What is Energy Modeling?

It simulates the building's energy use across a full year.

## Top Software
- IESVE
- EnergyPlus
- HAP

In KSA, modeling cooling loads is the primary challenge.
`
    },
    {
        filename: 'commissioning-cx-process.mdx',
        content: `---
title: "The Commissioning (Cx) Process"
description: "Verifying that building systems perform as designed."
publishedAt: "2023-10-30"
updatedAt: "2024-12-10"
tags: ["Commissioning", "Quality", "Operations"]
framework: "LEED"
topic: "Energy"
stage: "Construction"
difficulty: "Intermediate"
readingTime: "5 min read"
---

# Fundamental vs Enhanced Cx

Commissioning ensures the owner gets what they paid for.

- **Fundamental**: Prerequisite in LEED.
- **Enhanced**: Additional credit, includes future durability.
`
    },
    {
        filename: 'site-selection-checklist.mdx',
        content: `---
title: "Sustainable Site Selection Checklist"
description: "What to look for before buying land."
publishedAt: "2024-04-05"
updatedAt: "2024-04-05"
tags: ["Site", "Planning", "Ecology"]
framework: "Mostadam"
topic: "Site"
stage: "Design"
difficulty: "Beginner"
readingTime: "4 min read"
---

# Avoid Sensitive Land

Do not build on:
- Prime farmland.
- Floodplains.
- Habitat for endangered species.

## Connectivity
Choose sites near existing infrastructure and public transport.
`
    },
    {
        filename: 'net-zero-roadmap.mdx',
        content: `---
title: "Path to Net Zero in KSA"
description: "Understanding the Saudi Green Initiative and Net Zero 2060."
publishedAt: "2024-06-01"
updatedAt: "2025-01-12"
tags: ["NetZero", "SGI", "Carbon"]
framework: "Mostadam"
topic: "General"
stage: "Operation"
difficulty: "Advanced"
readingTime: "9 min read"
---

# The Saudi Green Initiative

KSA aims for Net Zero by 2060.

## Strategies for Buildings
1. Maximize efficiency.
2. On-site renewables (PV).
3. Off-site renewable procurement.
`
    }
];

if (!fs.existsSync('content/guides')) fs.mkdirSync('content/guides', { recursive: true });

guides.forEach(g => {
    fs.writeFileSync(path.join('content/guides', g.filename), g.content);
    console.log('Created ' + g.filename);
});
