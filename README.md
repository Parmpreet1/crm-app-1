# CRM React Application

A modern, responsive CRM (Customer Relationship Management) application built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional interface with responsive design
- **Dashboard**: Overview with key metrics, donut chart, and recent activity
- **Navigation**: Collapsible sidebar and fully responsive Navbar with mobile menu
- **Tabs**: Responsive HorizontalTabs for switching dashboard views
- **Dark Mode**: Toggle dark/light mode from the Navbar
- **Charts**: Real donut chart using Recharts, matching status colors
- **Contacts**: Add new contact button and country code select in Business Details
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- **React 19**: Latest version with modern features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Scripts**: Create React App tooling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd crm-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Responsive top navigation bar
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Dashboard.tsx   # Main dashboard component
│   ├── Layout.tsx      # Main layout wrapper
│   ├── HorizontalTabs.tsx # Responsive tab bar
│   ├── BreadcrumbBar.tsx  # Breadcrumb navigation
│   ├── AcountDetails.tsx  # Account/business details with contacts
│   └── dashboard/
│       └── components/ # Dashboard widgets (OrderStatus, charts, etc.)
├── pages/              # Page components (to be added)
├── hooks/              # Custom React hooks (to be added)
├── utils/              # Utility functions (to be added)
├── types/              # TypeScript type definitions (to be added)
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## Customization

This application is designed to be easily customizable. You can:

1. **Modify colors**: Update the color palette in `tailwind.config.js`
2. **Add components**: Create new components in the `src/components/` directory
3. **Update navigation**: Modify the navigation items in `Sidebar.tsx`
4. **Customize dashboard**: Update the dashboard content in `Dashboard.tsx`

## Next Steps

To complete the CRM application, consider adding:

- [ ] Customer management pages
- [ ] Deal pipeline management
- [ ] Task management system
- [ ] User authentication
- [ ] Data persistence (API integration)
- [ ] Charts and analytics
- [ ] Search and filtering
- [ ] Export functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Usage Notes

- **Navbar**: On mobile, use the hamburger menu to access search, theme toggle, notifications, and user info.
- **Tabs**: HorizontalTabs are scrollable on mobile and wrap on desktop.
- **Dark Mode**: Toggle the sun/moon icon in the Navbar to switch themes.
- **Order Status Donut Chart**: The donut chart is data-driven and colors match the status icons.
- **Contacts**: In Business Details, you can add new contacts and select a country code before the phone number.
