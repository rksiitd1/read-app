// App.js
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import './App.css';


const App = () => {
  const [text, setText] = useState('');
  const [readingList, setReadingList] = useState([]);

  const handleAddToReadingList = () => {
    if (text.trim()) {
      setReadingList([...readingList, text]);
      setText('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Reading App</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a book title or URL"
          className="mr-2"
        />
        <Button onClick={handleAddToReadingList}>Add to List</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {readingList.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Reading Item {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>{item}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;