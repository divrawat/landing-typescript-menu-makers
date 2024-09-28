import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const HowToUse = () => {


    const content = [
        {
            // heading: "The Need for Menu Digitalization",
            paragraphs: [
                "Creating custom menus for any occasion can be a time-consuming task, but with the 'Make My Menu' app, it’s never been easier. Whether you're planning a family gathering, organizing a restaurant menu, or hosting a special event, 'Make My Menu' allows you to design professional and personalized menus in just a few simple steps. In this guide, we’ll walk you through the process of using the app to create stunning menus, ensuring you have everything you need to impress your guests or customers.",
            ],
        },

        {
            heading: "Steps to Create a Menu",
            listItems: [
                "Register and login to your account.",
                "Click on Onboard your restaurant.",
                "Fill essential details of your restuarant like name, website, address and then submit.",
                "A restuarant gets added to your account's dashboard.",
                "Click on the restaurant name to add a menu.",
                "Now you can add menu items, categories, and customize the menu manually or by importing a menu's photo.",
                "After that all the menu items get added to the menu.",
                "After adding all the menu items, click on the 'Publish' button.",
                "Now your menu is live on our subdomain and you can share it with your customers.",
                "You can either copy the link or scan the QR code.",
                "Enter the link in the browser, you will see your generated menu.",
            ]
        },

    ];


    return (
        <div>
            <Navbar />
            <article className="dark:bg-[#080c1a]">

                <div className="max-w-[1000px] p-4 mx-auto">

                    <h1 className="font-bold text-4xl text-center dark:text-[white]">How To Use Our APP</h1>


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

                        </div>
                    ))}
                </div>

            </article>

            <Footer />
        </div>
    );
};

export default HowToUse;
