

try {
  const response = await fetch('url');
  if (!response.ok) throw new Error('Error al obtener datos');
  const data = await response.json();
  console.log('Datos recibidos:', data);
  return data;
} catch (error) {
  console.error('Fallo en GET:', error);
}