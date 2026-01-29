# Website Development Brief: THE Business School

## Project Overview
Build a premium, award-worthy website for THE Business School - an innovative, accessible MBA program focused on social business and entrepreneurship. The site should convey transformation, accessibility, and entrepreneurial spirit while maintaining professional excellence.

## Design Direction

### Visual Identity
- **Core Values**: Transformational. Heartsome. Entrepreneurial.
- **Aesthetic**: Premium but approachable, modern but warm, professional but human
- **Target Feel**: Awwwards-level excellence with purpose-driven authenticity
- **Avoid**: Corporate stuffiness, elitism, generic edu templates

### Design Principles
1. **Bold Typography**: Large, confident headings that make statements
2. **Generous White Space**: Let content breathe, avoid clutter
3. **Purposeful Animation**: Subtle scroll-triggered reveals, smooth transitions
4. **Rich Interactions**: Hover states, micro-interactions that delight
5. **Human Touch**: Real photography feel (when using images), authentic voice throughout
6. **Accessibility**: WCAG AA compliant, keyboard navigable, semantic HTML

### Color Strategy
- **Primary**: Deep, rich tones suggesting trust and transformation (consider deep blues, teals, or purples)
- **Accent**: Vibrant, energetic color for CTAs and highlights (coral, amber, or electric blue)
- **Neutrals**: Warm grays and off-whites, avoid pure black/white
- **Use sparingly**: Let white space and typography lead

### Typography Approach
- **Headings**: Modern geometric sans (Inter, Instrument Sans, General Sans)
- **Body**: Highly readable sans-serif or humanist serif
- **Hierarchy**: Dramatic scale contrast (48-72px+ headings, 16-18px body)
- **Weight Variation**: Use font weights to create visual interest

## Page Structure & Content

### PAGE 1: Homepage (`/`)

#### Navigation
```
Logo: THE Business School
Menu: 
- Our Model
- Faculty
- Think Tank
- MBA Program
- Apply
CTA: Request Information
```

#### Hero Section
**Visual Treatment**: Full viewport height, dramatic typography, subtle gradient or video background

```markdown
# Transform the World on Your Terms

Business education that meets your needs at a price that actually makes sense.

[Apply Now] [Learn More ↓]
```

**Design Notes**: 
- Headline should be massive (72px+)
- Animate in on load with subtle fade + slide
- Include scroll indicator
- Background: Consider subtle particle effect or gradient animation

#### About Section
**Layout**: Two-column on desktop, single column mobile

```markdown
## Let's Be Direct

Most people can't afford an MBA that serves their ambition for growth, that least disrupts their lives and at costs they can afford. Not because they're not smart enough or capable enough, but because the quality-price envelope has largely gone out of sync.

THE Business School exists to change that equation.

We deliver rigorous curriculum with qualified faculty, comprehensive resources, and meaningful credentials—at a fraction of what you'd expect to pay.
```

**Feature Grid** (4 columns, icon + text):

**What We Focus On:**
- Faculty with PhDs and real-world experience
- Curriculum meeting international standards  
- Resources, support, and networks
- Flexible delivery that fits your life

**What We Don't Spend On:**
- Expensive physical facilities
- Premium real estate
- Infrastructure that doesn't serve education

**The Result**: An MBA program that makes financial sense. Study online and in public spaces. Maintain your income. Stay connected to your life.

**Design Notes**:
- Use icon system for features
- Cards with subtle hover lift effect
- Parallax scroll on this section

#### Who This Is For Section
**Layout**: Split screen, two distinct blocks

```markdown
## Who This Is For

### You Should Be Here If:
- You need an MBA to advance your career or launch a venture
- You want to solve unique problems beyond generic education
- You're building something real and need tools to do it right
- You want education to serve your goals and fit your life

### You'll Thrive Here If:
- You're self-directed and can manage flexible learning
- You have clear purpose for pursuing this degree
- You're ready to do rigorous work
- You want to connect theory to practice constantly
```

**Design Notes**: 
- Use contrasting background colors for each block
- Checkmark or arrow icons for list items
- Animate items in on scroll

#### MBA Program Overview
```markdown
## MBA in Social Business & Entrepreneurship

A focused MBA designed for people solving real problems.

**The Focus**: You're building something that matters—a social enterprise, business serving underserved markets, nonprofit, or transformation within existing organizations.

**The Approach**: Core business fundamentals taught for real-world application in contexts where resources are constrained and impact matters.

**The Delivery**: Hybrid learning that fits your life—online platform, live video sessions, periodic in-person gatherings in public spaces.

**Industry Adaptations**: Each cohort focuses on specific sectors—agriculture, sports, fashion, technology—with cases and projects mirroring your industry.

[Explore the Curriculum →]
```

**Design Notes**:
- Large text blocks with emphasis on key phrases
- Use color blocking or background images
- Sticky scroll effect or reveal animation

#### Curriculum Highlights
**Layout**: Accordion or tab interface

```markdown
## What You'll Actually Learn

### Management Fundamentals
Master core disciplines: finance and accounting, marketing, operations, organizational behavior, strategy. Not theory for theory's sake, but frameworks you'll use to make better decisions.

### Analytical Methods
Develop ability to work with data, conduct rigorous research, use AI, and make evidence-based decisions.

### Leadership Capabilities
Learn to lead teams, navigate dynamics, manage conflict, build culture, and make ethical decisions under pressure.

### Specialized Knowledge for Impact
Deep training in development economics, bottom-of-the-pyramid business models, social entrepreneurship, and innovation in constrained environments.

### Applied Experience & Research
Work on real ventures and problems. Entrepreneurship lab, competitions, guest sessions, rigorous research addressing your unique challenges.
```

**Design Notes**:
- Interactive tabs or expandable sections
- Icons for each category
- Smooth expand/collapse animations

#### Think Tank Teaser
```markdown
## Beyond the Classroom: THE Think Tank

Your learning extends beyond courses. Our collaborative research and innovation platform where students, alumni, faculty, and practitioners work together on real challenges.

Conduct research that matters, collaborate on development problems, participate in industry working groups, test ideas, build lasting partnerships.

[Explore Think Tank →]
```

**Design Notes**:
- Visual interest: photo grid or illustration
- Hover effects on key phrases
- Link leads to dedicated page

#### Why This Works (Stats/Benefits)
**Layout**: Three-column grid

```markdown
## Why This Works

### For You Personally
Get an MBA without financial devastation. Apply learning immediately. Build a network of problem-solvers. Manage your own time.

### For Your Career
Acquire credentials that matter. Develop actual competence—analyze complex situations, design solutions, lead implementation, conduct research.

### For What You're Building
Strategic frameworks and operational tools for sustainability. Understand financials, design business models, validate markets, manage people, raise capital, measure impact.
```

**Design Notes**:
- Cards with icons
- Subtle background colors or borders
- Hover state reveals more detail

#### Mission Statement
```markdown
## What Drives Us

We're focused on delivering exceptional business education to people who need it.

**We believe:**
- Access to knowledge shouldn't depend on wealth
- Quality and affordability aren't opposites  
- Education should serve students, not the other way around

We've designed everything—our model, delivery, pricing—around these beliefs.
```

**Design Notes**:
- Large, centered text
- Dramatic typography treatment
- Subtle animation

#### CTA Section
```markdown
## Ready to Start?

Stop waiting for the "right time." Stop letting cost barriers delay what you're meant to build. The knowledge exists. The faculty exists. The technology exists.

The only question is whether you're ready to do the work.

[Apply Now] [Request Information] [Speak with Admissions]
```

**Design Notes**:
- Full-width section with contrasting background
- Large, prominent CTAs
- Consider video background or gradient

#### Footer
```
THE Business School
Transformational. Heartsome. Entrepreneurial.
Education that works for you.

Quick Links:
- Our Model
- Faculty  
- Think Tank
- MBA Program
- Apply
- Contact

Connect:
[Social media icons]

© 2026 THE Business School. All rights reserved.
```

---

### PAGE 2: Our Model (`/model`)

```markdown
# How THE Business School Works

We've built a business school around a simple idea: eliminate every cost that doesn't directly improve your learning.

Most of what makes education expensive has nothing to do with education. It's real estate, buildings that sit empty, administrative overhead, location premiums.

We don't have those costs. So you don't pay for them.
```

#### Section 1: Platform-First Infrastructure
```markdown
## Platform-First Infrastructure

Our primary educational infrastructure is digital—an integrated platform handling everything:

- Complete learning management system
- Video conferencing for live sessions
- Collaborative workspaces for team projects
- Resource libraries with cases, readings, tools
- Academic administration and progress tracking
- Career services and professional development
- Alumni networking

Accessible 24/7 from anywhere. Scales efficiently—serving ten students costs roughly the same as thousands.

The investment we make in technology would traditionally go toward buildings. Buildings serve dozens. Our platform serves thousands and gets better with use.
```

#### Section 2: Hybrid Delivery Using Public Spaces
```markdown
## Hybrid Delivery Using Public Spaces

When face-to-face interaction creates value, we use spaces that already exist:

- Public libraries for focused work
- Community centers for workshops
- Cafés and co-working spaces for team meetings
- Event venues for guest lectures
- Partner facilities for industry-specific learning

We pay only for time actually used. No mortgages. No maintenance. No utility bills for empty rooms.

**Advantages:**
- Geographic flexibility—programs in multiple cities simultaneously
- Real-world integration—learn where business happens
- Accessibility—familiar spaces without intimidation barriers
- Community connection—strengthening local relationships
```

#### Section 3: Expert Faculty, Flexible Structure
```markdown
## Expert Faculty, Flexible Structure

We employ faculty who can teach at the highest level:

- Core faculty with PhDs designing curriculum and maintaining quality
- Industry practitioners bringing sector-specific expertise
- Project mentors guiding applied learning
- Global talent accessed via video conferencing

This lets us match the right expertise to each learning need without carrying fixed costs of large tenured faculty bodies.
```

#### Section 4: Industry-Adaptive Curriculum
```markdown
## Industry-Adaptive Curriculum

Rather than building separate programs for each sector, we've designed a core curriculum that adapts:

- **Foundation content** remains consistent—fundamental management, finance, analytics, leadership
- **Application changes by industry**—cases, projects, guest faculty reflect specific sectors
- **Cohort structure enables customization**—agriculture, fashion, sports cohorts get same core knowledge applied differently

Maximum efficiency in curriculum development while delivering personalized, relevant education.
```

#### Section 5: Research Infrastructure
```markdown
## Research Infrastructure for Real Questions

Students don't just learn existing frameworks—they generate new knowledge addressing specific challenges.

Our platform and Think Tank provide:
- Access to databases and analytical tools
- Faculty mentorship on research design
- Collaboration with peers investigating similar questions
- Frameworks for rigorous market research, feasibility studies, impact assessments

Investigate questions unique to your context that existing literature may not address.
```

#### Section 6: Who We Serve
```markdown
## Matching What People Need with What We Offer

**Who needs this:**
- Professionals who can't afford six-figure debt
- People with family/work responsibilities requiring flexible study
- Entrepreneurs building ventures in non-traditional sectors
- Leaders in developing regions where local options are limited
- Anyone who values knowledge over brand names

**What we provide:**
- High-quality curriculum at accessible pricing
- Flexible delivery accommodating real lives
- Industry-relevant content for overlooked sectors
- Learning focused on application, not just theory
- Research support for your specific questions
- Community of people solving similar challenges
```

#### Why This Model Works
**Layout**: Three sections with visual dividers

```markdown
## Why This Model Works

### Financial Sustainability

**Low fixed costs**: No campus, no buildings, no infrastructure maintenance. Major fixed cost is platform development and core faculty.

**Variable costs that scale**: As enrollment grows, we add capacity as needed. Costs increase proportionally with students.

**Accessible pricing**: Low overhead means affordable tuition that covers costs and invests in quality.

**Reinvestment model**: Surplus revenue improves platform, expands faculty, develops new industry adaptations, provides student support.

Sustainable cycle: more students → more resources → better outcomes → stronger reputation → more students who benefit.

### Educational Effectiveness

Hybrid learning isn't second-best. For working professionals, it's often superior.

- **Immediate application**: Learn Monday, apply Tuesday
- **Maintained context**: Stay embedded in work environment
- **Research integration**: Investigate questions relevant to your work
- **Diverse perspectives**: Classmates solving problems across different contexts
- **Technology preparation**: Working the way modern businesses work

### Scalability

This model can grow:
- Platform costs don't increase proportionally
- Public spaces exist everywhere
- Faculty can teach remotely, expanding talent pool globally
- Industry adaptations replicate across geographies
- Each successful cohort strengthens the model

We can serve ten times current size without fundamentally changing how we operate.
```

#### Value Created
**Layout**: Three-column expandable cards

```markdown
## Value Created

### For You as a Student

**Financial value**: MBA for a fraction of typical cost. No crushing debt means faster ROI, more freedom in career choices, resources for building your venture.

**Time value**: Don't pause your career. Earn income, build experience, maintain momentum while getting educated.

**Learning value**: Curriculum quality matches international standards. Faculty qualifications comparable to top programs.

**Applied value**: What you learn gets used immediately. Assignments can be actual work challenges. Projects can be real ventures.

**Research capability**: Develop ability to investigate systematically, validate rigorously, generate evidence-based solutions.

**Network value**: Classmates are practitioners, entrepreneurs, builders. Relationships become partnerships, collaborations, support systems.

**Flexibility value**: Study when it works for you. Balance family, work, community. Maintain the life you've built.

### For Your Work and Ventures

- Strategic capability
- Financial literacy
- Operational competence
- Leadership skills
- Market understanding through systematic research
- Problem-solving capacity
- Credibility

### For Communities and Markets

- Economic opportunity—businesses create jobs
- Better solutions from diverse perspectives
- New knowledge addressing underserved markets
- Market development for underserved populations
- Institutional strengthening for NGOs and social enterprises
- Knowledge diffusion—teach others, mentor emerging leaders
- Demonstration effect—proving access and quality aren't trade-offs
```

#### Core Insight (Closing Statement)
```markdown
## Core Insight

Traditional business schools built their models when physical presence was necessary for education delivery. That constraint no longer exists.

**We're not cutting corners. We're cutting costs that don't serve learning.**

**We're not lowering standards. We're eliminating barriers.**

**We're not offering less. We're delivering more of what actually matters.**

The question was never whether quality business education could be affordable. It was whether anyone would build a model designed around that goal.

We have.

[Apply Now] [Request Information]
```

---

### PAGE 3: Faculty (`/faculty`)

```markdown
# Our Faculty: Expertise That Serves Your Goals

We hire people who can teach and people who know what they're talking about. That's it.

Our faculty hold advanced degrees from respected institutions. They've published research. They've built businesses, advised organizations, worked in the sectors they teach about. They know their subjects deeply and they know how to help you learn them.

We don't hire based on prestige or pedigree. We hire based on whether someone can make complex ideas clear, whether they've done the work they're teaching, and whether they're committed to your success.
```

#### Faculty Profile Example
**Layout**: Card-based layout with photo, expandable details

```markdown
## Dr. Felix Rafiki
### Assistant Professor of Social Entrepreneurship & Innovation

**Background**: PhD in Management from University of Carrickmore. MBA from Swancity. Fifteen years building and advising social enterprises across West Africa, including Chief Innovation Officer for a major microfinance institution reaching 200,000 clients.

**What he teaches**: Social venture strategy, bottom-of-the-pyramid business models, scaling in resource-constrained environments, cross-sector partnerships.

**What he brings to students**: Dr. Rafiki has built the kinds of ventures many students aspire to create. He knows what works in theory and what actually works when operating with limited capital in complex institutional environments. His networks across Africa provide students access to real opportunities and partnerships.

He teaches case studies from his own ventures—including the failures. Students learn not just frameworks but the messy reality of implementation.

**Why he's here**: "I spent years learning expensive lessons. I teach so students can skip some of those lessons and move faster to what actually matters—building things that last and create real value for people who need it."
```

**Design Notes**:
- Note: Gender pronouns are inconsistent in source (he/she). Clarify and correct in final version.
- Professional photography
- Hover reveals full bio
- Quote highlighted prominently
- Link to courses taught

```markdown
[Additional Faculty Profiles - Follow Same Format]

[Join Our Faculty →]
```

---

### PAGE 4: Think Tank (`/think-tank`)

```markdown
# THE Think Tank: Where Learning Continues

The MBA gives you tools. THE Think Tank gives you a place to use them.

This isn't an academic research center publishing papers nobody reads. It's a working space where students, alumni, partners, and practitioners collaborate on actual problems. Where ideas get tested. Where projects get built. Where people trying to solve real challenges find others doing the same.
```

#### What It Is
```markdown
## What It Is

THE Think Tank is a collaborative platform—both digital and physical—where people come together to work on things that matter.

**Who participates:**
- Current students applying what they're learning
- Alumni continuing to develop ventures
- Faculty exploring questions that need answering
- Partner organizations needing analytical support
- Community members with expertise to contribute
- Practitioners working on specific challenges

**What happens here:**
- Projects addressing real business and development problems
- Research that informs decisions and generates new solutions
- Workshops where people work together intensively
- Conversations with practitioners and experts
- Testing ideas before committing major resources
- Building collaborations and partnerships

Structured enough to be productive. Flexible enough to respond to what people actually need.
```

#### Core Activities
**Layout**: Expandable sections or tabs

```markdown
## Core Activities

### Research That Solves Problems

Research at THE Think Tank addresses questions that matter to people building things. Not research for publication's sake—research to inform decisions, validate approaches, generate new solutions.

Questions we explore:
- What business models work for smallholder farmers in specific regions?
- How do microenterprises in informal economies access capital?
- What factors determine success for women-led ventures in particular sectors?
- How can technology improve service delivery in resource-constrained settings?

The research produces practical outputs—market analyses, feasibility studies, implementation guides, policy recommendations. Everything shared openly.

### Industry Working Groups

Ongoing communities organized around specific sectors:
- Agriculture & Food Systems
- Financial Inclusion & Fintech
- Sustainable Fashion & Supply Chains
- Education & Skills Development
- Health Systems & Access
- Climate & Environmental Business
- Women's Economic Empowerment
- Technology for Social Impact

Groups meet monthly in hybrid format. Members share insights, discuss challenges, collaborate, conduct research, build collective knowledge.

These aren't networking groups. They're working groups. You participate because you're doing something in that space and need the expertise others bring.

### Learning From Practitioners

Regular sessions with people doing the work—entrepreneurs, investors, policymakers, operators sharing specific insights you can use.

Not motivational speeches. Knowledge transfer.

Sessions are hybrid. Recordings available for those who can't attend live.

### Venture Development Support

For people building businesses or organizations:
- Feedback sessions on your model
- Office hours with faculty and experienced entrepreneurs
- Help validating markets and testing assumptions
- Connections to potential partners and investors

This isn't formal incubation. It's ongoing support from people who know what you're going through.
```

#### How It Works
**Layout**: Four-column grid

```markdown
## How It Works

### For Students
Think Tank is integrated into your learning. Course projects involve Think Tank collaboration. Propose independent research. Participate in relevant working groups. Build lasting relationships.

### For Alumni
Continued connection and support. Ongoing access to expertise. Collaboration opportunities. Platform for ventures. Learning that doesn't stop.

Alumni contribute as much as they take—mentoring students, sharing expertise, bringing projects, conducting research.

### For Partners and Organizations
Analytical capacity and fresh perspectives. Submit organizational challenges. Work with student teams. Access faculty expertise. Commission research on specific questions.

Some engagements pro bono. Others fee-based depending on scope.

### For Community Members and Practitioners
If you have relevant expertise, contribute. Join working groups. Attend open events. Offer expertise for projects. Propose collaborative research addressing community needs.

Not exclusive. If you're working on something aligned with Think Tank focus areas, you can participate.
```

#### What Gets Produced
```markdown
## What Gets Produced

**For ventures and organizations:**
- Business plans and financial models
- Market research and feasibility studies
- Strategic plans and implementation roadmaps

**For knowledge building:**
- Research reports addressing specific questions
- Case studies documenting what worked and what didn't
- Guides and tools others can use
- Policy briefs for decision-makers

**For participants:**
- Networks of collaborators
- Portfolio work demonstrating capabilities
- Refined ideas and validated approaches
- Connections to opportunities and resources

Everything produced is shared openly unless there are specific confidentiality needs.
```

#### Where It Happens
```markdown
## Where It Happens

### Digital Platform
Primary workspace for ongoing collaboration:
- Project management tools and shared documents
- Discussion forums for asynchronous work
- Resource library with cases and research
- Calendar of events and sessions
- Matching system connecting people with complementary skills

Accessible anytime, anywhere.

### Physical Sessions
Consistent with THE Business School model, Think Tank uses public and partner spaces:
- Monthly gatherings in community centers or event venues
- Working group meetings in libraries or cafés
- Intensive workshops in co-working spaces
- Field research in communities where challenges exist

Location varies based on what makes sense for the specific activity.
```

#### Signature Programs
**Layout**: Three featured program cards

```markdown
## Signature Programs

### Annual Transformation Summit
Full-day convening bringing together social entrepreneurs, investors, policymakers, academics, practitioners. Features workshops, venture showcases, panel discussions, collaborative sessions, and presentation of significant Think Tank research findings.

Each year addresses a specific theme relevant to current challenges.

### Venture Challenge
Annual competition where students and external participants pitch ventures addressing specific development or social challenges. Winners receive seed funding, mentorship, and Think Tank support for implementation.

### Practitioner-in-Residence
Each term, an accomplished entrepreneur or development practitioner:
- Teaches a seminar sharing their expertise
- Mentors students on projects
- Works on their own strategic questions with Think Tank support
- Creates connections between students and their networks
```

#### Who Should Engage
```markdown
## Who Should Engage

**You should participate if:**
- You're working on a real challenge and need perspectives beyond your own
- You have expertise that could help others solve problems
- You're building a venture or organization and need support
- You have research questions that need rigorous investigation

**You won't find value if:**
- You're looking for networking without contributing
- You want theoretical discussions disconnected from application
- You're not willing to share what you're learning

This is for people building things, researching real questions, and helping others do the same.
```

#### Getting Involved
```markdown
## Getting Involved

**Current students**: Talk to your faculty advisor about Think Tank opportunities. Check the platform for current projects and working groups.

**Alumni**: Access through the alumni portal. Propose projects, join working groups, offer mentorship, or attend events.

**Organizations**: Submit a project proposal through our website. Describe the challenge you're facing and how Think Tank might help. We'll respond within two weeks.

**Community members**: Join our mailing list for event announcements. Attend open sessions to see if this is something you want to engage with more deeply.

**Funders**: If you want to support specific Think Tank initiatives—research on particular topics, venture support in certain sectors, expanded capacity—contact us to discuss.
```

#### Clarity Section
```markdown
## What This Isn't

- Not a consulting firm selling services
- Not an incubator taking equity in ventures
- Not traditional academic research focused primarily on publication
- Not networking for networking's sake

## What This Is

A space where people working on real challenges access support, perspectives, and collaboration that helps them do better work.

A platform where learning continues beyond coursework.

A community of people who believe problems get solved when diverse perspectives combine around shared commitment to finding solutions.

A resource for anyone aligned with our focus on transformation, social impact, and entrepreneurial action.

[Get Involved →] [View Current Projects →]
```

---

## Technical Implementation Requirements

### Performance
- Lighthouse score: 90+ across all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px, 1920px
- Touch-friendly interactions on mobile
- Hamburger menu on mobile, full nav on desktop

### Animations
- Use GSAP or Framer Motion for complex animations
- Scroll-triggered reveals (Intersection Observer)
- Smooth scrolling
- Parallax effects (subtle, purposeful)
- Loading animations
- Hover states on all interactive elements
- Page transitions

### SEO
- Semantic HTML5
- Proper heading hierarchy
- Meta tags for all pages
- Open Graph tags
- Schema.org markup for organization
- XML sitemap
- robots.txt

### Accessibility
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Alt text for all images
- Sufficient color contrast (WCAG AA)
- Skip to main content link
- Reduced motion media queries

### Forms
- Apply form with validation
- Request information form
- Contact forms
- Error states and success messages
- Form submission handling

### Additional Features
- Smooth scroll to section anchors
- Back to top button (appears on scroll)
- Loading states for async content
- 404 page with navigation
- Search functionality (optional)
- Newsletter signup (footer)

### Technology Stack Recommendations
- **Framework**: Next.js or Astro (for static generation)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: GSAP or Framer Motion
- **Icons**: Heroicons, Lucide, or custom SVG set
- **Fonts**: System font stack or Google Fonts (Inter, Plus Jakarta Sans, Instrument Sans)
- **Deployment**: Vercel, Netlify, or similar

## Content Notes
- Tone: Direct, confident, human, purposeful
- Avoid: Jargon, passive voice, academic stuffiness
- Emphasize: Accessibility, real-world application, transformation
- Use: Action-oriented language, specific examples, concrete benefits

## Assets Needed
- Logo (primary, white version, favicon)
- Faculty photos (professional, consistent style)
- Hero images/video
- Icon set (custom or from library)
- Illustration assets (optional)
- Pattern/texture assets for backgrounds

---

**Final Note**: This website should feel like a premium experience that doesn't alienate. It should be visually stunning while remaining purposeful. Every animation, every interaction, every design choice should serve the core message: exceptional education, accessible to those who need it, built for transformation.