// "use client";
// import { useRouter } from 'next/navigation';
// import Navbar from '../Components/Navbar';
// import { useCart } from '../context/CartContext';
// import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, getTotalItems, isLoaded } = useCart();
//   const router = useRouter();

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
//   };

//   const continueShopping = () => {
//     router.push('/');
//   };

//   const proceedToCheckout = () => {
//     alert('Proceeding to checkout!');
//   };

//   // Show loading state
//   if (!isLoaded) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="max-w-6xl mx-auto px-4 py-16">
//           <div className="text-center">
//             <div className="animate-pulse">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-8"></div>
//               <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
//               <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
        
//         <div className="max-w-6xl mx-auto px-4 py-16">
//           <div className="text-center">
//             <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
//               <FaShoppingBag className="text-4xl text-gray-400" />
//             </div>
            
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Your Cart is Empty
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
//               Looks like you haven't added any printers to your cart yet. Start shopping to find the perfect printer for your needs!
//             </p>
            
//             <button
//               onClick={continueShopping}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={continueShopping}
//               className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
//             >
//               <FaArrowLeft className="text-lg" />
//               <span className="font-semibold">Continue Shopping</span>
//             </button>
//           </div>
          
//           <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Total Items</p>
//             <p className="text-2xl font-bold text-blue-600">{getTotalItems()}</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* Cart Header */}
//               <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   Cart Items ({getTotalItems()})
//                 </h2>
//               </div>

//               {/* Cart Items List */}
//               <div className="divide-y divide-gray-200">
//                 {cart.map((item) => (
//                   <div key={`${item.id}-${item.addedAt || item.id}`} className="p-6 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center space-x-4">
//                       {/* Product Image */}
//                       <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
//                         {item.image && item.image !== '/images/printer1.jpg' ? (
//                           <img 
//                             src={item.image} 
//                             alt={item.name}
//                             className="w-16 h-16 object-cover rounded"
//                             onError={(e) => {
//                               e.target.style.display = 'none';
//                               e.target.nextSibling.style.display = 'block';
//                             }}
//                           />
//                         ) : (
//                           <span className="text-2xl text-blue-600">🖨️</span>
//                         )}
//                       </div>

//                       {/* Product Details */}
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-lg font-semibold text-gray-900 truncate">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                           {item.description}
//                         </p>
                        
//                         {/* Price */}
//                         <div className="flex items-center space-x-2 mt-2">
//                           <span className="text-xl font-bold text-gray-900">
//                             ${item.discountPrice}
//                           </span>
//                           {item.discountPrice < item.price && (
//                             <span className="text-sm text-gray-500 line-through">
//                               ${item.price}
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Quantity Controls */}
//                       <div className="flex items-center space-x-3">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
//                         >
//                           <FaMinus className="text-sm text-gray-700" />
//                         </button>
                        
//                         <span className="w-8 text-center font-semibold text-gray-900">
//                           {item.quantity}
//                         </span>
                        
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
//                         >
//                           <FaPlus className="text-sm text-gray-700" />
//                         </button>
//                       </div>

//                       {/* Item Total & Remove */}
//                       <div className="text-right">
//                         <div className="text-lg font-bold text-gray-900 mb-2">
//                           ${(item.discountPrice * item.quantity).toFixed(2)}
//                         </div>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-500 hover:text-red-700 transition-colors flex items-center space-x-1 text-sm"
//                         >
//                           <FaTrash className="text-sm" />
//                           <span>Remove</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8">
//               {/* Summary Header */}
//               <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 rounded-t-xl">
//                 <h2 className="text-xl font-semibold text-white">Order Summary</h2>
//               </div>

//               {/* Summary Content */}
//               <div className="p-6 space-y-4">
//                 {/* Subtotal */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
//                   <span className="font-semibold text-gray-900">${getTotalPrice().toFixed(2)}</span>
//                 </div>

//                 {/* Shipping */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="font-semibold text-green-600">FREE</span>
//                 </div>

//                 {/* Tax */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Tax (10%)</span>
//                   <span className="font-semibold text-gray-900">${(getTotalPrice() * 0.1).toFixed(2)}</span>
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-gray-200 pt-4">
//                   <div className="flex justify-between items-center text-lg">
//                     <span className="font-semibold text-gray-900">Total</span>
//                     <span className="text-2xl font-bold text-blue-600">
//                       ${(getTotalPrice() * 1.1).toFixed(2)}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Checkout Button */}
//                 <button
//                   onClick={proceedToCheckout}
//                   className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-6"
//                 >
//                   Proceed to Checkout
//                 </button>

//                 {/* Security Badge */}
//                 <div className="text-center mt-4">
//                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
//                     <span>🔒</span>
//                     <span>Secure checkout • 256-bit SSL encrypted</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalItems, isLoaded, getTotalPrice } = useCart();
  const router = useRouter();

  const continueShopping = () => router.push("/store");
  const proceedToCheckout = () => alert("Proceeding to checkout!");

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-8"></div>
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaShoppingBag className="text-4xl text-gray-400" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>

            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any printers to your cart yet. Start shopping to find the perfect printer for your needs!
            </p>

            <button
              onClick={continueShopping}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={continueShopping}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <FaArrowLeft className="text-lg" />
              <span className="font-semibold">Continue Shopping</span>
            </button>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

          <div className="text-right">
            <p className="text-sm text-gray-600">Total Items</p>
            <p className="text-2xl font-bold text-blue-600">{getTotalItems()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Cart Items ({getTotalItems()})</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.addedAt || item.id}`} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                            onError={(e) => {
                              e.target.style.display = "none";
                              if (e.target.nextSibling) e.target.nextSibling.style.display = "block";
                            }}
                          />
                        ) : (
                          <span className="text-2xl text-blue-600">🖨️</span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>

                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xl font-bold text-gray-900">${item.discountPrice}</span>
                          {item.discountPrice < item.price && <span className="text-sm text-gray-500 line-through">${item.price}</span>}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                        >
                          <FaMinus className="text-sm text-gray-700" />
                        </button>

                        <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                        >
                          <FaPlus className="text-sm text-gray-700" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 mb-2">${(item.discountPrice * item.quantity).toFixed(2)}</div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors flex items-center space-x-1 text-sm"
                        >
                          <FaTrash className="text-sm" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 rounded-t-xl">
                <h2 className="text-xl font-semibold text-white">Order Summary</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                  <span className="font-semibold text-gray-900">${getTotalPrice().toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-semibold text-gray-900">${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-blue-600">${(getTotalPrice() * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={proceedToCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-6"
                >
                  Proceed to Checkout
                </button>

                <div className="text-center mt-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <span>🔒</span>
                    <span>Secure checkout • 256-bit SSL encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
