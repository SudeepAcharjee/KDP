import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function SupportSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6"
    >
      {/* Support Box */}
      <div className="bg-black text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Need Support?</h2>
        <p className="text-gray-300 mb-6">
          Catalyst provides expert consulting services to help businesses thrive with streamlined workflows and collaboration.
        </p>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Chat to Sales</span>
            </div>
            <p className="text-gray-400 text-sm">sales@catalyst.com</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Chat to Support</span>
            </div>
            <p className="text-gray-400 text-sm">support@catalyst.com</p>
          </div>
        </div>
        <div className="mt-6 flex gap-4 text-gray-300 text-xl">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
      
      {/* Info Boxes */}
      <div className="flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-bold">Ready to revolutionize your business?</h3>
          <p className="text-gray-600 mt-2">
            Transform your business with Catalyst&apos;s innovative, efficient, and intuitive consulting solutions.
          </p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-xl">Start Free Trial</button>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-100 p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-lg font-bold">Visit Us</h3>
            <p className="text-gray-600">100 Smith Street, AU</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-100 p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-lg font-bold">Call Us</h3>
            <p className="text-gray-600">+1 (555) 000-0000</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
