import express from "express";
import temperatureRoutes from "@temperature/routes/temperatureRoutes";
import { IDatabase } from "@db/interfaces/IDatabase";
import TemperatureService from "@temperature/services/TemperatureService";
import HumidityService from "@humidity/services/HumidityService";
import humidityRoutes from "@humidity/routes/humidityRoutes";
import userRoutes from "@user/routes/userRoutes";
import { verifyJWT } from "@middleware/jwtAuth";

/**
 * /api/v1
 */
export default function (db: IDatabase) {
  const router = express.Router({ mergeParams: true });
  const temperatureService = new TemperatureService(db);
  const humidityService = new HumidityService(db);

  router.use("/user", userRoutes());
  router.use("/temperature", verifyJWT, temperatureRoutes(temperatureService));
  router.use("/humidity", verifyJWT, humidityRoutes(humidityService));

  return router;
}
