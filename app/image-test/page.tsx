export default function ImageTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Image Test Page</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl mb-2">Basic HTML Image Test:</h2>
          <img src="/logo.png" alt="Logo" width="150" height="50" style={{ border: "1px solid red" }} />
          <p className="mt-2 text-sm text-gray-500">Path: /logo.png</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Team Image Test:</h2>
          <img src="/Team.jpg" alt="Team" width="400" height="300" style={{ border: "1px solid red" }} />
          <p className="mt-2 text-sm text-gray-500">Path: /Team.jpg</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Sound Equipment Test:</h2>
          <img
            src="/sound-equipment.jpg"
            alt="Sound Equipment"
            width="400"
            height="300"
            style={{ border: "1px solid red" }}
          />
          <p className="mt-2 text-sm text-gray-500">Path: /sound-equipment.jpg</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Event Image Test:</h2>
          <img src="/event1.jpg" alt="Event 1" width="400" height="300" style={{ border: "1px solid red" }} />
          <p className="mt-2 text-sm text-gray-500">Path: /event1.jpg</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl mb-2">Image File List:</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {`
Public directory should contain:
- logo.png
- Team.jpg
- sound-equipment.jpg
- event1.jpg
- event2.jpg
- ...and other image files
          `}
        </pre>
      </div>
    </div>
  )
}
