import { Injectable } from '@angular/core';

// import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { SimpleSpanProcessor, ConsoleSpanExporter, BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ApplicationTelemetry } from '@graphitehealth/sdk';
// import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';

// import {JaegerExporter } from 'opentelemetry/JaegerExporter'
// require('jaeger-client').initTracer

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  public tracerProvider: WebTracerProvider;

  constructor() {
    // Optionally register automatic instrumentation libraries
    // registerInstrumentations({
    //   instrumentations: [new HttpInstrumentation()],
    // });

    // const resource = ApplicationTelemetry.createTraceProviderResource('service-name-fixme', 'service-version-fixme', 'service-namespace-fixme');
    // this.tracerProvider = new WebTracerProvider({resource: resource});
    this.tracerProvider = new WebTracerProvider();
    this.tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

    // let conf: CollectorExporterNodeConfigBase = {};
    let conf = {
      url: 'http://localhost:4318/v1/traces',
      headers: { "Content-Type": "application/json", "Accept": "application/json" }
    };
    const exporter = new OTLPTraceExporter(conf);
    this.tracerProvider.addSpanProcessor(new BatchSpanProcessor(exporter));
    this.tracerProvider.register();
  }
}
