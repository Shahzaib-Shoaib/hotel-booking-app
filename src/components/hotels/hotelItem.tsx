import HotelCard from "./hotelCard";
import Image from "next/image";
import Link from "next/link";

function HotelItem(props: any) {
    
  return (
      <a className="group">
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden ">
          <div className="relative object-fill group-hover:opacity-75 h-72 ">
            <Image src={props.images[0]} alt={props.title} layout="fill" />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {props.title}
        </h3>
        <p className="mt-1 text-sm text-gray-700">{props.address}</p>
        <p className="mt-1 text-sm text-gray-700">${props.price}</p>
      </a>
  );
}

export default HotelItem;
