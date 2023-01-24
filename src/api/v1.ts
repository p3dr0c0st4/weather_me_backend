import express from "express";
import temperatureRoutes from "@temperature/routes/temperatureRoutes";
import { IDatabase } from "@db/interfaces/IDatabase";
import TemperatureService from "@temperature/services/TemperatureService";
import HumidityService from "@humidity/services/HumidityService";
import humidityRoutes from "@humidity/routes/humidityRoutes";
import userRoutes from "@user/routes/userRoutes";
import authenticationMiddleware from "@middleware/authenticationMiddleware";

/**
 * /api/v1
 */
export default function (db: IDatabase) {
  const router = express.Router({ mergeParams: true });
  const temperatureService = new TemperatureService(db);
  const humidityService = new HumidityService(db);
  //Middleware
  const authVerify =  authenticationMiddleware.verifyCookieSession


  router.use("/user", userRoutes());
  router.use("/temperature", authVerify, temperatureRoutes(temperatureService));
  router.use("/humidity", authVerify, humidityRoutes(humidityService));

  return router;
}
