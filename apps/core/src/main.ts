import { NestFactory } from "@nestjs/core";
import { CoreModule } from "./core.module.js";

async function bootstrap() {
    const app = await NestFactory.create(CoreModule);

    app.listen(3000);
}

bootstrap();
