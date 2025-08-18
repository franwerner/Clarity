import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

const swaggerConfig = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setVersion('1.0')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, documentFactory)
}

export default swaggerConfig