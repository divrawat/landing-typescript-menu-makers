import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const HowToUse = () => {
    const content = [
        {
            heading: "The Need for Menu Digitalization",
            paragraphs: [
                "As more consumers turn to digital solutions for their dining needs, the demand for menu digitalization has never been greater. Gone are the days when printed menus were the only option. Digital menus not only reduce printing costs but also allow for quick updates and changes, making it easier for restaurants to adapt to seasonal ingredients, pricing changes, or special events. 'Make My Menu' harnesses this need, offering a seamless way to convert physical menus into dynamic digital formats."
            ],
        },
        {
            heading: "Benefits of Digital Menus",
            listItems: [
                "Real-Time Updates: With 'Make My Menu,' restaurants can easily update their menus in real time, ensuring that customers always have access to the latest offerings.",
                "Sustainability: By reducing the reliance on printed materials, restaurants can lower their environmental impact.",
                "Enhanced Customer Experience: Digital menus can include images, descriptions, and even nutritional information, helping customers make informed decisions."
            ]
        },
        {
            heading: "Customization: Catering to Unique Dining Experiences",
            paragraphs: [
                "One of the standout features of 'Make My Menu' is its powerful customization options. Restaurants can tailor their digital menus to reflect their brand identity and meet the unique preferences of their clientele."
            ],
            subSections: [
                {
                    heading: "Template Customization",
                    paragraphs: [
                        "With various templates available, users can choose designs that best suit their restaurant's theme. Whether it’s a chic café, a family-style diner, or a fine dining establishment, the app provides a diverse range of templates to fit any aesthetic. Users can modify colors, fonts, and layouts, ensuring that their digital menus align with their brand image."
                    ]
                },
                {
                    heading: "Custom Names",
                    paragraphs: [
                        "Personalization doesn’t stop at templates. 'Make My Menu' allows users to create custom names for their menus. This feature is particularly useful for restaurants with multiple locations or unique dining experiences. By assigning specific names to different menus, restaurants can streamline their operations and enhance the customer experience."
                    ]
                },
                {
                    heading: "Easy Editing for Dynamic Menus",
                    paragraphs: [
                        "Flexibility is key in the restaurant industry. 'Make My Menu' empowers users to edit their menus easily and efficiently. Whether it’s adding new items, changing prices, or removing discontinued dishes, the app’s intuitive interface makes the editing process straightforward."
                    ]
                },
                {
                    heading: "User-Friendly Interface",
                    paragraphs: [
                        "Designed with user experience in mind, 'Make My Menu' offers an easy-to-navigate interface. Restaurant owners and staff can quickly familiarize themselves with the app, reducing the learning curve and allowing for faster implementation. With just a few clicks, they can transform their menus to meet current trends or customer preferences."
                    ]
                }
            ]
        },
        {
            heading: "Live Subdomains: A Game Changer for Online Presence",
            paragraphs: [
                "In addition to menu digitalization and customization, 'Make My Menu' offers the unique capability to generate a live subdomain for each restaurant’s menu. This feature is a game changer, allowing restaurants to showcase their offerings online without the need for a full website."
            ],
            listItems: [
                "Instant Accessibility: Customers can access the restaurant’s menu directly via a dedicated URL, making it easy to share on social media or include in online listings.",
                "Improved SEO: With each subdomain optimized for search engines, restaurants can improve their online visibility and attract more customers.",
                "Simplified Ordering: For restaurants offering takeout or delivery, live subdomains provide a straightforward platform for customers to browse menus and place orders."
            ]
        },
        {
            heading: "Security and Account Management",
            paragraphs: [
                "In an era where data security is paramount, 'Make My Menu' prioritizes user safety. The app allows restaurants to create accounts that securely store their menu data. With robust security measures in place, users can rest assured that their information is protected."
            ],
            subSections: [
                {
                    heading: "Account Features",
                    listItems: [
                        "Data Backup: All menus and templates are automatically backed up, ensuring that no changes are lost.",
                        "User Roles: Restaurants can manage different user roles, allowing staff to edit menus without compromising sensitive account information."
                    ]
                }
            ]
        },
        {
            heading: "Conclusion",
            paragraphs: [
                "'Make My Menu' is not just an app; it’s a comprehensive solution for the evolving needs of the restaurant industry. By focusing on menu digitalization, customization, and user-friendly features, it empowers restaurants to enhance their customer experience while maintaining operational efficiency.",
                "As the demand for innovative dining solutions continues to grow, 'Make My Menu' stands ready to lead the charge, helping restaurants embrace the future of menu management with confidence and creativity. Whether you’re a small café or a large restaurant chain, this app is designed to elevate your dining experience, ensuring that your menus not only satisfy hunger but also delight the senses."
            ]
        }
    ];

    return (
        <div>
            <Navbar />
            <article className="dark:bg-[#080c1a]">
                <div className="max-w-[1000px] p-4 mx-auto">

                    <h1 className="text-3xl font-bold my-8 text-center dark:text-[white] leading-7">Make My Menu: The Future of Menu Digitalization</h1>
                    <p className="my-3 leading-7 dark:text-[#d6d2d2]">In today’s fast-paced world, the restaurant industry is undergoing a significant transformation. With technology at the forefront, dining experiences are evolving beyond traditional menus. Enter "Make My Menu," an innovative app designed to streamline menu digitalization, customization, and template creation, making it easier for restaurants to cater to their customers' needs while maintaining a strong online presence.</p>

                    {content.map((item, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-bold mt-8 mb-2 dark:text-[white]">{item.heading}</h2>
                            {item.paragraphs && item.paragraphs.map((paragraph, paraIndex) => (
                                <p key={paraIndex} className="my-3 dark:text-[#d6d2d2]">{paragraph}</p>
                            ))}
                            {item.listItems && (
                                <ul>
                                    {item.listItems.map((listItem, listIndex) => (
                                        <li key={listIndex} className="list-disc ml-8 dark:text-[#d6d2d2] mb-2">{listItem}</li>
                                    ))}
                                </ul>
                            )}
                            {item.subSections && item.subSections.map((subSection, subIndex) => (
                                <div key={subIndex}>
                                    <h3 className="text-xl font-bold mt-4 mb-2 dark:text-[white]">{subSection.heading}</h3>
                                    {subSection.paragraphs && subSection.paragraphs.map((paragraph, paraIndex) => (
                                        <p key={paraIndex} className="my-3 dark:text-[#d6d2d2]">{paragraph}</p>
                                    ))}
                                    {subSection.listItems && (
                                        <ul>
                                            {subSection.listItems.map((listItem, listIndex) => (
                                                <li key={listIndex} className="list-disc ml-8 mb-2 dark:text-[#d6d2d2]">{listItem}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </article>

            <Footer />
        </div>
    );
};

export default HowToUse;
