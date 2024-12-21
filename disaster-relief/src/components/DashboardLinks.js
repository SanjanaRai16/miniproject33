import React from "react";
import { Link } from "react-router-dom";

const DashboardLinks = ({ role }) => {
    const links = {
        Admin: [
            { path: "/admin/post-disaster", label: "Post Disaster" },
            { path: "/admin/update-disaster", label: "Update Disaster" },
            { path: "/admin/post-shelter", label: "Post Shelter" },
            { path: "/admin/update-shelter", label: "Update Shelter" },
            { path: "/admin/view-sources", label: "View Sources" },
            { path: "/admin/view-emergency-sources", label: "View Emergency Sources" },
            { path: "/admin/add-bank-details", label: "Add Bank Details" },
            { path: "/admin/manage-bank-details", label: "Manage Bank Details" },
            { path: "/admin/view-volunteers", label: "View Volunteers" },
            { path: "/admin/view-volunteer-tasks", label: "View Volunteer Tasks" },
            { path: "/admin/view-user-details", label: "View User Details" },
        ],
        Volunteer: [
            { path: "/volunteer/dashboard", label: "View Tasks" },
            { path: "/volunteer/submit-report", label: "Submit Report" },
        ],
        User: [
            { path: "/user/donations", label: "View Donations" },
            { path: "/user/request-help", label: "Request Help" },
        ],
    };

    return (
        <ul>
            {links[role]?.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default DashboardLinks;
