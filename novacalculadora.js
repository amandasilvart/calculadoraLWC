import { LightningElement } from 'lwc';

export default class Novacalculadora extends LightningElement {
    result = '';

    handleClick(event) {
      const value = event.target.value;
      this.result += value;
    }
  
    handleClear() {
      this.result = '';
    }
  
    handleEquals() {
      // Verifica se a expressão contém uma divisão por zero
      if (this.result.includes('/0')) {
        this.result = 'Error: nao e possivel';
        return;
      }
  
      try {
        // Avalia a expressão matemática e exibe o resultado
        this.result = eval(this.result);
      } catch (error) {
        // Exibe uma mensagem de erro caso a expressão não seja válida
        this.result = 'Error';
    }
  }
  }
    
