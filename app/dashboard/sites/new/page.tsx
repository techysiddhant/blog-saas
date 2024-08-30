import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const NewSiteRoute = () => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Card className="max-w-[450px]">
                <CardHeader>
                    <CardTitle>Create Site</CardTitle>
                    <CardDescription>
                        Create your Site here. Click the button below once your done...
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="grid gap-2">
                            <Label>Site Name</Label>
                            <Input
                                //   name={fields.name.name}
                                //   key={fields.name.key}
                                //   defaultValue={fields.name.initialValue}
                                placeholder="Site Name"
                            />
                            {/* <p className="text-red-500 text-sm">{fields.name.errors}</p> */}
                        </div>
                        <div className="grid gap-2">
                            <Label>Subdirectory</Label>
                            <Input
                                //   name={fields.subdirectory.name}
                                //   key={fields.subdirectory.key}
                                //   defaultValue={fields.subdirectory.initialValue}
                                placeholder="Subdirectory"
                            />
                            {/* <p className="text-red-500 text-sm">
                  {fields.subdirectory.errors}
                </p> */}
                        </div>
                        <div className="grid gap-2">
                            <Label>Description</Label>
                            <Textarea
                                //   name={fields.description.name}
                                //   key={fields.description.key}
                                //   defaultValue={fields.description.initialValue}
                                placeholder="Small Description for your site"
                            />
                            {/* <p className="text-red-500 text-sm">
                  {fields.description.errors}
                </p> */}
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    {/* <SubmitButton text="Create Site" /> */}
                </CardFooter>
            </Card>
        </div>
    )
}

export default NewSiteRoute