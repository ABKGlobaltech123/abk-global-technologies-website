function loadContent(service) {
    let content = {
        service1: `
            <h3>Consulting Services</h3>
            <p>
                Our Consulting Services cover advanced Virtualization, Cloud Computing, and Hyper-Converged Infrastructure to optimize IT performance. We ensure Backups & Disaster Recovery along with On-Premise & Cloud Storage for data security. Our solutions enhance Cybersecurity measures to safeguard businesses. We also specialize in Internet of Things (IoT) integration for smart connectivity.
            </p>
        `,
        service2: "<h3>Managed Services </h3><p>ABK Global Technologies simplifies IT support by consolidating multiple vendor contracts into one expert-driven service. Our proactive onsite and remote support enhances availability, speeds up issue resolution, and minimizes downtime across your IT environment.</p>",
        service3: "<h3>Cloud Solutions</h3><p>We provide cloud services across AWS, Azure, Google Cloud, and OpenStack. Our Cloud VDI solutions include AWS Workspaces, ensuring seamless virtual desktop experiences. For email, we offer Microsoft Office 365, G-Suite, and AWS WorkMail to enhance communication and collaboration.</p>",
        service4: "<h3>Support Maintenance</h3><p>Our technology partners offer proactive and predictive support, ensuring optimized IT investments and seamless operations. With advanced digital tools, we prevent issues before they escalate, maximizing uptime and efficiency. Our services include Workforce Solutions like Microsoft Office 365, Skype for Business, and Digital Workforce Portals, along with Digital Services such as Big Data, IoT, Cloud-Native Applications, and DevOps. Reach out for hassle-free, expert IT support.</p>"
    };

    // Ensure service key exists before updating content
    if (content[service]) {
        document.getElementById("service-content").innerHTML = content[service];
    } else {
        document.getElementById("service-content").innerHTML = "<p>Service not found.</p>";
    }
}
