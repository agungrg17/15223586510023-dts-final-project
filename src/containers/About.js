import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow mr-20 ml-20 overflow-hidden sm:rounded-lg"
        style={{marginTop: "150px" }}>
        <div className="px-4 py-5 sm:px-6">
          <h4 className="text-lg leading-6 font-medium text-gray-900">
            Tentang Website
          </h4>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Website</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Resep Masakan (dengan React Js)
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                API
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                https://github.com/tomorisakura/unofficial-masakapahariini-api
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Design
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Material UI & Tailwind
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
