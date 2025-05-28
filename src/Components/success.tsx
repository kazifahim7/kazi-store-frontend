import { FaUserEdit, FaListAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const Success = () => {
    const steps = [
        {
            icon: <FaUserEdit className="w-6 h-6" />,
            title: "Create your order",
            description: "Select from a wide range of high-quality stationery products to create the perfect order for your home or office.",
            color: "bg-orange-100 text-orange-600"
        },
        {
            icon: <FaListAlt className="w-6 h-6" />,
            title: "Build your shopping list",
            description: "Organize your favorite items into a shopping list. From pens to notebooks, keep everything ready for purchase.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <FaRocket className="w-6 h-6" />,
            title: "Place your order",
            description: "Once you're ready, place your order and enjoy prompt delivery of all your stationery needs, right to your door.",
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white sm:py-20 lg:py-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-5xl"
                    >
                        How we ensure quality for your <span className="text-orange-500">stationery</span> needs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-gray-600"
                    >
                        We offer the finest quality stationery, tailored to meet your every need. From writing tools to paper supplies, we have it all.
                    </motion.p>
                </div>

                <div className="grid max-w-5xl gap-8 mx-auto mt-16 sm:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900">{step.title}</h3>
                            <p className="mt-4 text-center text-gray-600">{step.description}</p>
                            <div className="absolute top-0 left-1/2 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-300">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto mt-16 text-center"
                >
                    <p className="text-sm font-semibold tracking-wider text-orange-500 uppercase">
                        Trusted by thousands of businesses worldwide
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Success;