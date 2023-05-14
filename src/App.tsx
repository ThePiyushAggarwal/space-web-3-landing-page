import { useAtom } from "jotai"
import { DropdownNavigation } from "./components/DropdownNavigation"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { StatisticsSection } from "./components/StatisticsSection"
import { isMenuOpenAtom } from "./components/jotaiAtoms"

function App() {
	const [isMenuOpen] = useAtom(isMenuOpenAtom)

	return (
		<>
			<Header />
			{isMenuOpen && <DropdownNavigation />}
			<HeroSection />
			<StatisticsSection />
			<Footer />
		</>
	)
}

export default App
