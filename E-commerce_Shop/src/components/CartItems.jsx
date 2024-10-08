import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function CartItems({ item }) {
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(remove(item.id));
    toast.error("item removed from cart");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-gray-400 mt-2 mb-2 md:mx-5 last:border-none">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[25%] md:w-[20%]">
          <img src={item.image} alt="" className="object-cover h-24 md:h-32" />
        </div>

        <div className="md:ml-10 self-start space-y-3 md:space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-lg md:text-xl text-slate-700 font-semibold">
            {item.title}
          </h1>
          <h1 className="text-sm md:text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>

          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 md:p-3 mr-3 shadow-md"
              onClick={removeItem}
            >
              <RiDeleteBin6Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
