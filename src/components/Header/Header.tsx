import  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CiHeart, CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci"
import { IoMdArrowDropdown } from "react-icons/io"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false)
  const [pageDropdownOpen, setPageDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [isScrolledUp, setIsScrolledUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen)
  const togglePageDropdown = () => setPageDropdownOpen(!pageDropdownOpen)
  const toggleSearch = () => setSearchOpen(!searchOpen)

  const handleAddToCart = () => setCartCount(cartCount + 1)
  const handleLike = () => setLikeCount(likeCount + 1)

  // Track scroll position to add "fixed" header class when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolling up or down
      if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsScrolledUp(true);
      } else if (currentScrollY > 100) {
        // Scrolling down and not at the top - hide header
        setIsScrolledUp(false);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Classes for header based on scroll direction
  const headerClasses = `bg-white shadow-md transition-all duration-300 w-full ${
    isScrolledUp 
      ? 'fixed top-0 left-0 right-0 z-50 animate-slideDown' 
      : 'relative'
  }`;

  return (
    <>
      {/* This div maintains the layout when header becomes fixed */}
      {isScrolledUp && <div className="h-16 md:h-20"></div>}
      
      <nav className={headerClasses}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="logo">
              <h2 className="text-2xl font-bold">Okus.</h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to='/' className="text-gray-800 hover:text-blue-600 transition duration-300">Home</Link>
              
              {/* Shop Dropdown */}
              <div className="relative">
                <button 
                  onClick={toggleShopDropdown}
                  className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  Shop
                  <IoMdArrowDropdown className="ml-1" />
                </button>
                {shopDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <Link to="/shop/kategory" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Shop Category</Link>
                    <Link to="/shop/Details" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Product Details</Link>
                  </div>
                )}
              </div>
              
              {/* Page Dropdown */}
              <div className="relative">
                <button 
                  onClick={togglePageDropdown}
                  className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  Page
                  <IoMdArrowDropdown className="ml-1" />
                </button>
                {pageDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <Link to="/page/login" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Login </Link>
                    <Link to="/page/track" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Tracking</Link>
                    <Link to="/page/check" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Product Checkout</Link>
                   
                    <Link to="/page/confirm" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Confirmation</Link>
                   
                  </div>
                )}
              </div>
              
              <Link to='/Contact' className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</Link>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6 text-xl">
              <div className="relative">
                <CiSearch 
                  onClick={toggleSearch}
                  className="cursor-pointer hover:text-blue-600 transition duration-300" 
                />
                {searchOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg p-2 z-10">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                )}
              </div>
              
              <div className="relative">
                <CiHeart 
                  onClick={handleLike}
                  className="cursor-pointer hover:text-blue-600 transition duration-300" 
                />
                {likeCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {likeCount}
                  </span>
                )}
              </div>
              
              <div className="relative">
                <CiShoppingCart 
                  onClick={handleAddToCart}
                  className="cursor-pointer hover:text-blue-600 transition duration-300" 
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <CiSearch 
                onClick={toggleSearch}
                className="cursor-pointer hover:text-blue-600 transition duration-300 text-xl" 
              />
              <CiHeart 
                onClick={handleLike}
                className="cursor-pointer hover:text-blue-600 transition duration-300 text-xl" 
              />
              <CiShoppingCart 
                onClick={handleAddToCart}
                className="cursor-pointer hover:text-blue-600 transition duration-300 text-xl" 
              />
              <CiMenuBurger 
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer" 
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link 
                  to='/' 
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Shop Mobile Dropdown */}
                <div>
                  <button 
                    onClick={toggleShopDropdown}
                    className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
                  >
                    Shop
                    <IoMdArrowDropdown className="ml-1" />
                  </button>
                  {shopDropdownOpen && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      <Link 
                        to="/shop/Kategory" 
                        className="text-gray-800 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Shop Category
                      </Link>
                      <Link 
                        to="/shop/Details" 
                        className="text-gray-800 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Product Details
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Page Mobile Dropdown */}
                <div>
                  <button 
                    onClick={togglePageDropdown}
                    className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
                  >
                    Page
                    <IoMdArrowDropdown className="ml-1" />
                  </button>
                  {pageDropdownOpen && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      <Link 
                        to="/page/login" 
                        className="text-gray-800 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link 
                        to="/page/track" 
                        className="text-gray-800 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Tracking
                      </Link>
                      <Link 
                        to="/page/check" 
                        className="text-gray-800 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Product Checkout
                      </Link>
                      
                      <Link 
                        to="/page/confirm" 
                        className="text-gray-800 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Confirmation
                      </Link>
                      
                    </div>
                  )}
                </div>
                
                <Link 
                  to='/Contact' 
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
        
        {/* Search popup for mobile */}
        {searchOpen && (
          <div className="md:hidden p-2 border-t">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        )}
      </nav>
    </>
  )
}

export default Header