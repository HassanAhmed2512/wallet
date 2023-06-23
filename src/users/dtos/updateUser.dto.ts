import { PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./createUser.dto";

  // usning typed mapped to inherit all types And make it optional
  export class UpdateUserDto extends PartialType(CreateUserDto) {}
