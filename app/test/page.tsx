export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl mb-2">Logo Test:</h2>
          <img src="/logo.png" alt="Logo" width="150" height="50" />
          <p className="mt-2 text-sm text-gray-500">Path: /logo.png</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Team Image Test:</h2>
          <img src="/Team.jpg" alt="Team" width="400" height="300" />
          <p className="mt-2 text-sm text-gray-500">Path: /Team.jpg</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Event Image Test:</h2>
          <img src="/event1.jpg" alt="Event 1" width="400" height="300" />
          <p className="mt-2 text-sm text-gray-500">Path: /event1.jpg</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Sound Equipment Test:</h2>
          <img src="/sound-equipment.jpg" alt="Sound Equipment" width="400" height="300" />
          <p className="mt-2 text-sm text-gray-500">Path: /sound-equipment.jpg</p>
        </div>
      </div>
    </div>
  )
}
