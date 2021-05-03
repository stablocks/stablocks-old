# Stablocks

Stablocks seeks to provide an integrated suite of software modules for growing companies and startups. We want to remove the need for managing 34 different SaaS products. To do this, we have identified common functions used across all businesses and removed the excess to bring the basic core functionality to you. The benefits are great: a single subscription for all of your services, a shared look and feel across the modules, and having all the data be easily integrated from solution to solution.

## Software Modules

- [ ]  Startup Essentials
  - [ ] Employee management  
  - [ ] Organization management
  - [ ] Email (Google Workplace)
- [ ] CRM
  - [ ] Contacts management
  - [ ] Marketing
  - [ ] Sales 
- [ ] Finance and accounting
- [ ] HR
  - [ ] Payroll
  - [ ] Onboarding 
- [ ] Recruiting
  - [ ] Job posting and application management
  - [ ] Public job portal 
- [ ] Helpdesk
  - [ ] Chat
  - [ ] Ticketing system
  - [ ] Public help documentation
- [ ] Project Management
  - [ ] Tasks

## Open-Source

We also believe that this should not be a proprietary enterprise software, which is why we have made it open-source. We've carefully chosen a technology stack that is easy to learn and contribute to. The main components are [RedwoodJS](https://redwoodjs.com) for developing the web front-end and API and [Supabase](https://supabase.io/) to host the data.

## Developing

Stablocks uses [RedwoodJS](https://redwoodjs.com) as a framework for building both the front and back-end of the platform. We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 
