export default function DirectImageTest() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Direct Image Test Page</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl mb-2">Using HTML img tag:</h2>
          <img src="/logo.png" alt="Logo" width="150" height="50" style={{ border: "2px solid red" }} />
          <p className="mt-2 text-sm text-gray-500">Path: /logo.png</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Team Image Test:</h2>
          <img src="/Team.jpg" alt="Team" width="400" height="300" style={{ border: "2px solid red" }} />
          <p className="mt-2 text-sm text-gray-500">Path: /Team.jpg</p>
        </div>

        <div>
          <h2 className="text-xl mb-2">Sound Equipment Test:</h2>
          <img
            src="/sound-equipment.jpg"
            alt="Sound Equipment"
            width="400"
            height="300"
            style={{ border: "2px solid red" }}
          />
          <p className="mt-2 text-sm text-gray-500">Path: /sound-equipment.jpg</p>
        </div>
      </div>

      <div className="mt-12 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-semibold mb-4">Troubleshooting Tips:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Check if images appear with red borders</li>
          <li>Verify file paths match exactly what's in your public folder</li>
          <li>Check browser console for 404 errors</li>
          <li>Try clearing your browser cache</li>
        </ul>
      </div>
    </div>
  )
}
