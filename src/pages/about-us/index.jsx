import { useLoaderData } from "react-router";

const AboutUs = () => {
    const data = useLoaderData();
    return (
        <div className="max-w-4xl mx-auto py-10 px-4 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">About MyBooking</h1>

            <p className="mb-4">
                Welcome to <span className="font-semibold">The Hotel California</span> – your reliable companion in planning perfect trips!
                Whether you're traveling for business or pleasure, we help you find the best hotels at the best prices.
            </p>

            <p className="mb-4">
                Our platform offers a user-friendly experience, powerful filters, and a wide range of options for all budgets and preferences.
                From pet-friendly apartments to family-oriented resorts, we have something for everyone.
            </p>

            <p className="mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt, doloremque dolorum exercitationem fuga necessitatibus officia quae sint voluptas voluptatum!
            </p>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Why choose us?</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ullam.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ullam.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ullam.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ullam.</li>
                </ul>
            </div>
        </div>
    )
}
export default AboutUs;