import { Injectable } from '@angular/core';
import { WebTracerProvider } from '@opentelemetry/web';
import { SimpleSpanProcessor, ConsoleSpanExporter } from '@opentelemetry/tracing';
import { CollectorExporterNodeConfigBase, CollectorTraceExporter } from '@opentelemetry/exporter-collector';
// import { CollectorExporterConfigBase } from '@opentelemetry/exporter-collector/build/src/types';

// import {JaegerExporter } from 'opentelemetry/JaegerExporter'
// require('jaeger-client').initTracer

@Injectable({
  providedIn: 'root'
})
export class GraphiteTracerService {

  public tracerProvider: WebTracerProvider;

  constructor() {
    this.tracerProvider = new WebTracerProvider();
    this.tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

    // let conf: CollectorExporterNodeConfigBase = {};
    let conf: CollectorExporterNodeConfigBase = { url: 'http://localhost:55681/v1/traces', headers: { "Content-Type": "application/json", "Accept": "application/json" } };
    // let conf: CollectorExporterNodeConfigBase = { url: 'http://192.168.1.145:55681/v1/traces', headers: {}};
    const exporter = new CollectorTraceExporter(conf);
    this.tracerProvider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    this.tracerProvider.register();
  }
}
