import { GradientDots } from "@/components/ui/gradient-dots";

export default function Demo() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-background">
			<GradientDots className="z-0" />
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
				<h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 text-center">
					Gradient Dots
				</h1>
				<p className="text-muted-foreground text-lg text-center max-w-md">
					Demonstração do componente de fundo com pontos hexagonais e gradiente animado.
				</p>
			</div>
		</div>
	);
}
