import { ServicePage } from '../components/service-page'
import { FaUsers, FaUserTie, FaUserClock, FaUserPlus, FaFileContract, FaMoneyCheckAlt } from 'react-icons/fa';

const staffingSolutionsContent = {
    serviceName: "Staffing Solutions",
    description: "Providing tailored staffing solutions to meet your organization's unique needs, from temporary staffing to permanent placements across various industries. Our solutions ensure you have the right talent to achieve your business goals effectively and efficiently.",
    subServices: [
        { name: "IT Staffing", icon: FaUsers },
        { name: "Executive Search", icon: FaUserTie },
        { name: "Temporary Staffing", icon: FaUserClock },
        { name: "Permanent Placement", icon: FaUserPlus },
        { name: "Contract-to-Hire", icon: FaFileContract },
        { name: "Payroll Services", icon: FaMoneyCheckAlt }
    ],
    packages: [
        {
            name: "Essential",
            price: "250",
            description: "Ideal for small businesses requiring occasional staffing solutions. Get access to qualified professionals on-demand.",
            services: [
                "Access to Candidate Database",
                "Basic Screening Process",
                "Temporary Staffing Solutions",
                "Payroll Setup and Management",
                "1-Month Support for Placements"
            ]
        },
        {
            name: "Advantage",
            price: "350",
            description: "Designed for growing organizations needing consistent staffing support. Includes advanced screening and contract-to-hire services.",
            services: [
                "All Features in Basic Package",
                "Advanced Candidate Screening",
                "Executive Search Services",
                "Contract-to-Hire Solutions",
                "Dedicated Account Manager",
                "3-Month Support for Placements"
            ]
        },
        {
            name: "Premium",
            price: "450",
            description: "Comprehensive staffing solutions for enterprises. Includes full-scale recruitment, onboarding, and payroll management.",
            services: [
                "All Features in Standard Package",
                "Permanent Placement Services",
                "Custom Onboarding Process",
                "Industry-Specific Recruitment",
                "Employee Retention Programs",
                "6-Month Support for Placements",
                "Dedicated Team of Recruiters"
            ]
        }
    ],
    images: [
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50"
    ]
};

export default function StaffingSolutionsPage() {
    return <ServicePage {...staffingSolutionsContent} />
}

