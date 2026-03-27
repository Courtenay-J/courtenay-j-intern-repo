import { HelloWorld } from './HelloWorld.jsx'
import { Counter} from './Counter.jsx'
import { ResponsiveList } from './ResponsiveList.jsx'

export function Tests() {
  return (
    <>
    <div>
        <h1>- Test Page -</h1>
        <p>
            A dumping ground for test components and routing experiments.
        </p>
        <p>
            <Counter text="Clicks:" /> <Counter text="More Clicks:" /> <Counter text="Even More Clicks:" />
        </p>

        <p>
            <button class="bg-green-900 hover:bg-green-950 text-white py-2 px-4 rounded-3xl">
                This button uses inline tailwind CSS styles.
            </button>
          </p>
        </div>

        <p><ResponsiveList /></p>
    
    </>
  )
}