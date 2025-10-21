import {Divider} from "@heroui/react";

export default function TextDivider({
                                        text
                                    }: Readonly<{ text: string }>) {
    return (
        <div className={"flex max-w-full my-7 items-center gap-2 text-muted-foreground text-sm font-nunito"}>
            <Divider className={"flex-1 bg-gray-300"}/>
            {text}
            <Divider className={"flex-1 bg-gray-300"}/>
        </div>
    )
}