import { FaPenFancy, FaFileAlt, FaStickyNote, FaPaintBrush, FaEraser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
     { name: 'file', icon: <FaFileAlt /> },
     { name: 'ball pen', icon: <FaPenFancy /> },
     { name: 'sticker', icon: <FaStickyNote /> },
     { name: 'color pencil', icon: <FaPaintBrush /> },
     { name: 'eraser', icon: <FaEraser /> },
];

const CategoryCards = () => {
     return (
          <div className="p-6 bg-gray-100">
               <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {categories.map((category, idx) => (
                         <Link to={`/all-product?category=${category.name}`}
                              key={idx}                             className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center cursor-pointer group"
                         >
                              <div className="text-4xl text-indigo-500 group-hover:text-indigo-700 mb-3">
                                   {category.icon}
                              </div>
                              <h3 className="text-lg font-medium">{category.name}</h3>
                         </Link>
                    ))}
               </div>
          </div>
     );
};

export default CategoryCards;
