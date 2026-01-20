import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ArniaDigitale({apiario, identificativo, dataInstallazione, piena, macAddress}){
    return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{identificativo}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">Apiario</span>{" "}
          {apiario}
        </p>

        <p>
          <span className="font-semibold">Data di installazione</span>{" "}
          {dataInstallazione}
        </p>

        <p>
          <span className="font-semibold">L_arnia_è_piena?</span>{" "}
          {piena}
        </p>

        <p>
          <span className="font-semibold">Mac_address?</span>{" "}
          {macAddress}
        </p>

      </CardContent>
    </Card>
  )
}