import express from "express";
import connectDatabase, { disconnectDatabase } from "./utils/database.js";
import loginRoute from "./routes/loginRoute.js";
import orderRoute from "./routes/orderRoute.js";
import registerRoute from "./routes/registerRoute.js";
import passwordChangeRoute from "./routes/passwordChangeRoute.js";
import settingsRoute from "./routes/settingsRoute.js";
import menuRoute from "./routes/menuRoute.js";
import filterCategoriesRoute from "./routes/filterRoute.js";
import productsRoute from "./routes/productsRoute.js";

const app = express();

connectDatabase();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/", loginRoute);
app.use("/", orderRoute);
app.use("/", registerRoute);
app.use("/", passwordChangeRoute);
app.use("/", settingsRoute);
app.use("/", filterCategoriesRoute);
app.use("/", productsRoute);
app.use("/", menuRoute);

const gracefulShutdown = () => {
  console.log("Closing database connections...");
  disconnectDatabase()
    .then(() => {
      console.log("Database connections closed.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Error closing database connections:", err);
      process.exit(1);
    });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

export default app;
