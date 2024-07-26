export default function guardrail(mathFunction) {
    const queue = []; // Create the queue array
  
    try {
      // Execute the mathFunction and push its result to the queue
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      // If an error is thrown, push the error message to the queue
      queue.push(error.message);
    }
  
    // Always add the 'Guardrail was processed' message to the queue
    queue.push('Guardrail was processed');
  
    return queue; // Return the queue
  }
  