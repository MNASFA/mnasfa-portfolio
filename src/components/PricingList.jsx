import { check } from "../assets";
import { pricing } from "../constants";

import Heading from "./Heading";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const PricingList = () => {
  return (
   <>

<Heading
          className="md:max-w-md lg:max-w-2xl font-bold"
          title="Works"
        />


     <div className="grid gap-[2rem] grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      {pricing.map((item) => (
        <Card className="max-w-[24rem] overflow-hidden z-30">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-[200px] "
        >
          <img
            src={item.banner}
            alt={item.title}
            className="h-[100%] w-[100%] saturate-150"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="text-[#a25bfe]">
            {item.title}
          </Typography>
          <Typography variant="p" color="gray" className="mt-3 font-thin ">
            {item.description}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between py-0">
          <div className="flex items-center justify-between ">
            <ul className="flex -m-0.5 gap-2">
              <li
                    key={item.id}
                    className="flex w-6 h-6   rounded-full overflow-hidden"
                  >
                    <img
                      src={item.icon1}
                      className="w-full"
                      width={20}
                      height={20}
                      alt="luanguages"
                    />
              </li>

              <li
                    key={item.id}
                    className="flex w-6 h-6   rounded-full overflow-hidden"
                  >
                    <img
                      src={item.icon2}
                      className="w-full"
                      width={20}
                      height={20}
                      alt="luanguages"
                    />
              </li>
              
              <li
                    key={item.id}
                    className="flex w-6 h-6   rounded-full overflow-hidden"
                  >
                    <img
                      src={item.icon3}
                      className="w-full"
                      width={20}
                      height={20}
                      alt="luanguages"
                    />
              </li>
            </ul>
          </div>
          <Typography className="font-normal text-[#a25bfe]">{item.date}</Typography>
        </CardFooter>
        <div className="flex gap-2 px-6 py-4 pt-6">
          <a href="#" className="px-5 py-2 text-gray-50  bg-[#a25bfe] rounded">Demo</a>
          <a href="#" className="px-5 py-2 border-2 border-[#a25bfe] rounded">Source Code</a>
          
        </div>
       
      </Card>
      
      
      ))}
       
    </div>
   </>
  );
};

export default PricingList;
