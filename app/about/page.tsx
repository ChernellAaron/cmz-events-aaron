export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">About CMZ Events</h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img src="/Team.jpg" alt="CMZ Events Team" className="rounded-lg w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2">
          <p className="mb-4">
            CMZ Events delivers premium event production services designed to electrify weddings, conferences, and
            special occasions. We specialize in high-impact audio-visual experiences - from crystal-clear sound systems
            and dynamic DJ performances to immersive lighting solutions - all offered through flexible packages that
            align with your budget.
          </p>

          <p className="mb-4">
            With 15+ years of industry leadership, our expert team partners with you to maximize value without
            compromising quality. We pride ourselves on delivering cost-effective solutions that outperform expectations
            - whether you need essential equipment for an intimate gathering or full-scale production for corporate
            events.
          </p>

          <p>
            Your vision meets our execution. As your preferred event partner, we combine technical expertise with
            budget-conscious planning to ensure seamless experiences. From affordable microphone packages for community
            fundraisers to custom lighting designs for luxury galas, we adapt our resources to your needs and financial
            parameters. Let&apos;s transform your next event into a stress-free success story.
          </p>
        </div>
      </div>
    </div>
  )
}
