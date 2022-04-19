import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // console.log("Services: ", services);
  res.status(200).json({services});
};
