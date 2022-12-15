import { Injectable } from '@angular/core';

// import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
// import { SimpleSpanProcessor, ConsoleSpanExporter, BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';


@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  // public tracerProvider: WebTracerProvider;

  constructor() {
    // this.tracerProvider = new WebTracerProvider();
    // this.tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

    // let conf = {
    //   url: 'http://localhost:4318/v1/traces',
    //   headers: { "Content-Type": "application/json", "Accept": "application/json" }
    // };
    // const exporter = new OTLPTraceExporter(conf);
    // this.tracerProvider.addSpanProcessor(new BatchSpanProcessor(exporter));
    // this.tracerProvider.register();
  }
}
