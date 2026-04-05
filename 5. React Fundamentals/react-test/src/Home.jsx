import { HelloWorld } from './components/HelloWorld.jsx'
import { UseEffectTest } from './components/UseEffectTest.jsx'

export function Home() {
  return (
  <>
    <HelloWorld fname="Fozzie" species="Bare" />
    <UseEffectTest />
  </>
  );
}