import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Top Products Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Managed Website</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Manage Reputation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Power Tools</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Marketing Service</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Jobs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Brand Assets</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Investor Relations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a></li>
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Jobs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Brand Assets</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Investor Relations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Research</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Experts</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Agencies</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-500 mb-4">Heaven fruitful doesn't over lesser in days. Appear creeping</p>
            
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
  Copyright ©{new Date().getFullYear()} All rights reserved
</div>

         
        </div>
      </div>
    </footer>
  );
}

export default Footer;