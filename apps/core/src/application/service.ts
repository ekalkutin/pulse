import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class Service implements OnModuleInit {
    public onModuleInit() {
        console.log("Init");
    }
}
