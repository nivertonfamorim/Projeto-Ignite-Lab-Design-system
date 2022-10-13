import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { CheckBox } from "./components/CheckBox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TxtInput } from "./components/TxtInput";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  return (
   <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">

    <header className="flex flex-col items-center">
      <Logo/>

      <Heading size="lg" className="mt-4">
        Iginite Lab
      </Heading>

      <Text size="sm" className="text-gray-400 mt-1">
        Faça login e comece a usar! 
      </Text>
    </header>

    <form action="" className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
      <label htmlFor="email" className="flex flex-col gap-3">
        <Text className="font-semibold">Endereço de e-mail</Text>
        <TxtInput.Root>
          <TxtInput.Icon>
            <Envelope />
          </TxtInput.Icon>

          <TxtInput.Input type="email" id="email" placeholder="Digite seu email"/>
        </TxtInput.Root>
      </label>

      <label htmlFor="password" className="flex flex-col gap-3">
        <Text className="font-semibold">Sua senha</Text>
        <TxtInput.Root>
          <TxtInput.Icon>
            <Lock />
          </TxtInput.Icon>

          <TxtInput.Input type="password" id="password" placeholder="******"/>
        </TxtInput.Root>
      </label>

      <label htmlFor="remember" className="flex items-center gap-2">
        <CheckBox id="remember" />
        <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
      </label>
      <Button type="submit" className="mt-4 ">Entrar na plataforma</Button>
    </form>

    <footer className="flex flex-col items-center gap-4 mt-8">
      <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>

        <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!?</a>
        </Text>
  
    </footer>
      
   </div>
  )
}
