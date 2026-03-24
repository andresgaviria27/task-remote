import './globals.css'

export const metadata = {
  title: 'TaskRemote',
  description: 'Aplicación de gestión de tareas para equipos remotos, que facilita la organización y seguimiento de proyectos. Permite a los equipos trabajar de manera eficiente y colaborativa, independientemente de su ubicación geográfica.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
