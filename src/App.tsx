import { useAtom } from "jotai"
import { DropdownNavigation } from "./components/DropdownNavigation"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { isMenuOpenAtom } from "./components/jotaiAtoms"

function App() {
	const [isMenuOpen] = useAtom(isMenuOpenAtom)

	return (
		<>
			<Header />
			{isMenuOpen && <DropdownNavigation />}
			<HeroSection />
		</>
	)
}

export default App
